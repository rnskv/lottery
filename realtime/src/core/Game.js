import Roulette from 'src/core/Roulette';

import { gameApi, betsApi, itemsApi } from 'src/modules/api';
import { getRandomInt } from 'src/helpers/math';
import { getBetsTotalValue } from  'src/helpers/game';
import * as notificationsTypes from '../../../shared/configs/notificationsTypes';

class Game {
    constructor({ hash, secret, app, onFinish }) {
        this.app = app;
        this.roulette = new Roulette({
            sockets: this.app.io.sockets,
            onEnd: this.onRouletteRotateEnd.bind(this)
        });
        this.bets = [];
        this.onFinish = onFinish;
        this.time = 15;
        this.endingTime = 7;
        this.isStarted = false;
        this.isFinished = false;
        this.isClosedForBets = false;
        this.isShowWinner = false;
        this.betsQueue = [];
        this.isWaitingLastBets = false;
        this.publicSecret = 0;

        gameApi.execute('create', {
            body: {
                hash,
                secret
            }
        }).then((game) => {
            this.init({ ...game })
        }).catch((err) => {
            console.log(err)
        });
    }

    get users() {
        const uniqueUsers = {};

        this.bets.map(bet => {
            uniqueUsers[bet.user._id] = bet.user;
        });

        return Object.values(uniqueUsers).sort((a, b) => {
            if (this.bank.users[a._id] < this.bank.users[b._id]) {
                return 1;
            } else if (this.bank[a._id] > this.bank[b._id]) {
                return -1;
            } else {
                return 0;
            }
        });
    }

    get bank() {
        const total = getBetsTotalValue(this.bets);

        const users = {};

        this.bets.forEach(bet => {
            //@todo Опасный участок, если удалить пользователя а транзакцию оставить - все ебанется
            const userId = bet.user._id;

            if (!!users[userId]) {
                users[userId] += bet.item.cost
            } else {
                users[userId] = bet.item.cost;
            }
        });

        return {
            total,
            users
        };
    }

    get state() {
        return {
            bets: [...this.bets].reverse(),
            hash: this.hash,
            time: this.time,
            isWaitingLastBets: this.isWaitingLastBets,
            betsQueueLength: this.betsQueue.length,
            bank: this.bank,
            users: this.users,
            isShowWinner: this.isShowWinner,
            roulette: this.roulette.state,
            secret: this.publicSecret,
        }
    }

    init({ _id, hash, secret, bets }) {
        if (!_id) throw new Error('Ooops, something went wrong');
        this._id = _id;
        this.hash = hash;
        this.secret = secret;
        this.bets = bets;

        this.app.io.sockets.emit('game.reset', this.state);
    }

    async start() {
        this.isStarted = true;

        this.app.io.sockets.emit('game.start', this.time);

        while (this.time > 0) {
            await this.tick();
        }

        while (this.isWaitingLastBets) {
            await this.tick();
        }

        this.getWinner();
    }

    async tick() {
        return new Promise((resolve) => {
            if (this.time > 0) {
                this.time -= 1;
            } else {
                this.app.io.sockets.emit('game.waitingLastBets', {
                    betsQueueLength: this.state.betsQueueLength
                });
            }

            if (this.time < 5) {
                this.isClosedForBets = true;
            }

            this.app.io.sockets.emit('game.tick', this.time);

            setTimeout(resolve, 1000)
        });
    }

    async onGameEnd() {
        //обновляем игру
        await gameApi.execute('finish', {
            body: {
                id: this._id
            }
        });
        this.roulette.setVisible(false);
        this.isFinished = true;
        this.onFinish();
    }

    async getWinner() {
        const winner = await gameApi.execute('getWinnerById', {
            body: {
                id: this._id
            }
        }).catch(err => console.log('GET_WINNER', err));

        this.roulette.start({ winner, bank: this.state.bank, users: this.state.users });

        this.time = this.roulette.duration + this.endingTime;

        while (this.roulette.isVisible) {
            await this.tick();
        }

        //@todo вынести в отедльный метод
        this.app.io.sockets.emit('game.startRoulette');
    }

    onRouletteRotateEnd(winner) {
        this.isShowWinner = true;
        this.isFinished = true;
        this.publicSecret = this.secret;

        this.app.io.sockets.emit('game.getWinner', {
            winner,
            secret: this.secret
        });

        //@todo отедльный метод
        if (this.app.usersSockets[winner.bet.user._id]) {
            this.app.usersSockets[winner.bet.user._id].forEach(socketId => {
                if (this.app.io.sockets.connected[socketId]) {
                    this.app.io.sockets.connected[socketId].emit('game.win');
                }
            });
        }

        setTimeout(this.onGameEnd.bind(this), this.endingTime * 1000)
    }

    join(userData) {
        this.app.io.sockets.emit('game.join', userData);
    }

    isFirstUserBet(user) {
        return !this.users.filter((_user) => _user._id === user.id).length;
    }

    async addBet(betData) {
        return new Promise((async resolve => {
            const acceptedBets = [];
            console.log('addBet' ,betData)

            // const acceptedBet = await betsApi.execute('create', {
            //     body: {
            //         type: 'GAME_CLASSIC',
            //         game: this._id,
            //         user: betData.user.id,
            //         item: '5e6fc4a5dff153ea60d7c85d',
            //     }
            // }).catch(err => console.log(err));
            //
            // console.log('acceptedBet');

            for (const item of betData.items) {
                const bet = await betsApi.execute('create', {
                    body: {
                        type: 'GAME_CLASSIC',
                        game: this._id,
                        user: betData.user.id,
                        item: item._id
                    }
                }).catch(err => console.log(err));


                acceptedBets.unshift(bet)
            }

            for (const acceptedBet of acceptedBets) {
                this.bets.push(acceptedBet);
            }

            this.app.io.sockets.emit('game.bets', {
                bets: acceptedBets,
                bank: this.bank,
                users: this.users
            });

            if (this.users.length >= 1 && !this.isStarted) {
                this.start();
            }

            resolve()
        }))
    }

    async registerUserBets(data) {
        if (this.isClosedForBets) {
            return;
        }

        this.isWaitingLastBets = true;

        this.betsQueue.push(data);

        const isNeedToStartProcessing = this.betsQueue.length === 1;

        if (isNeedToStartProcessing) {
            while (this.betsQueue.length) {
                await this.processFirstBet();
                this.isWaitingLastBets = !!this.betsQueue.length;
            }
        }
    }

    async processFirstBet() {
        const betData = this.betsQueue[0];
        await this.addBet(betData);
        betData.onAccept();
        this.betsQueue.shift();
    }

    sync(socket) {
        socket.emit('game.sync', this.state);
    }
}

export default Game;
