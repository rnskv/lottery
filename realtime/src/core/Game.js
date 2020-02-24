import Roulette from 'src/core/Roulette';

import { gameApi, transactionsApi } from 'src/modules/api';
import { getRandomInt } from 'src/helpers/math';

class Game {
    constructor({ hash, secret, app, onFinish }) {
        this.app = app;
        this.roulette = new Roulette({
            sockets: this.app.io.sockets,
            onEnd: this.onRouletteRotateEnd.bind(this)
        });
        this.transactions = [];
        this.onFinish = onFinish;
        this.time = 15;
        this.isStarted = false;
        this.isFinished = false;
        this.isClosedForTransactions = false;
        this.isShowWinner = false;
        this.transactionsBlocksPool = [];
        this.isWaitingTransactions = false;
        this.publicSecret = null;
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

        this.transactions.map(transaction => {
            uniqueUsers[transaction.user._id] = transaction.user;
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
        const total = this.transactions.reduce((acc,transaction) => {
            return acc + transaction.value;
        }, 0);

        const users = {};

        this.transactions.forEach(transaction => {
            //@todo Опасный участок, если удалить пользователя а транзакцию оставить - все ебанется
            const userId = transaction.user._id;

            if (!!users[userId]) {
                users[userId] += transaction.value
            } else {
                users[userId] = transaction.value;
            }
        });

        return {
            total,
            users
        };
    }

    get state() {
        return {
            transactions: [...this.transactions].reverse(),
            hash: this.hash,
            time: this.time,
            isWaitingTransactions: this.isWaitingTransactions,
            transactionsPoolLength: this.transactionsBlocksPool.length,
            bank: this.bank,
            users: this.users,
            isShowWinner: this.isShowWinner,
            roulette: this.roulette.state,
            secret: this.publicSecret,
        }
    }

    init({ _id, hash, secret, transactions }) {
        this._id = _id;
        this.hash = hash;
        this.secret = secret;
        this.transactions = transactions;

        this.app.io.sockets.emit('game.reset', this.state);
    }

    async start() {
        this.isStarted = true;

        this.app.io.sockets.emit('game.start', this.time);

        while (this.time > 0) {
            await this.tick();
        }

        while (this.isWaitingTransactions) {
            await this.tick();
        }

        this.getWinner();
    }

    async tick() {
        return new Promise((resolve) => {
            if (this.time > 0) {
                this.time -= 1;
            } else {
                this.app.io.sockets.emit('game.waitingTransactions', {
                    transactionsPoolLength: this.state.transactionsPoolLength
                });
            }

            if (this.time < 5) {
                this.isClosedForTransactions = true;
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
        this.isShowRoulette = false;
        this.onFinish();
    }

    async getWinner() {
        const winner = await gameApi.execute('getWinnerById', {
            body: {
                id: this._id
            }
        }).catch(err => console.log('GET_WINNER', err));

        this.isShowRoulette = true;
        this.roulette.start({ winner, bank: this.state.bank, users: this.state.users });

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

        setTimeout(this.onGameEnd.bind(this), 7000)
    }

    join(userData) {
        this.app.io.sockets.emit('game.join', userData);
    }

    isFirstUserTransaction(user) {
        return !this.users.filter((_user) => _user._id === user.id).length;
    }

    async transaction(transactionData) {
        return new Promise((async resolve => {
            const acceptedTransactions = [];

            for (const value of transactionData.values) {
                const transaction = await transactionsApi.execute('create', {
                    body: {
                        type: 'GAME_CLASSIC',
                        game: this._id,
                        user: transactionData.user.id,
                        value,
                    }
                });

                acceptedTransactions.unshift(transaction)
            }

            for (const acceptedTransaction of acceptedTransactions) {
                this.transactions.push(acceptedTransaction);
            }

            this.app.io.sockets.emit('game.transactions', {
                transactions: acceptedTransactions,
                bank: this.bank,
                users: this.users
            });

            if (this.users.length >= 2 && !this.isStarted) {
                this.start();
            }

            resolve()
        }))
    }

    async registerTransactionsBlock(data) {
        if (this.isClosedForTransactions) {
            return;
        }

        this.isWaitingTransactions = true;

        this.transactionsBlocksPool.push(data);

        const isNeedToStartProcessingTransactions = this.transactionsBlocksPool.length === 1;

        if (isNeedToStartProcessingTransactions) {
            this.processFirstTransaction()
        }
    }

    async processFirstTransaction() {
        if (this.transactionsBlocksPool.length) {
            const transaction = this.transactionsBlocksPool[0];

            await this.transaction(transaction);
            transaction.onAccept();
            this.transactionsBlocksPool.shift();

            this.isWaitingTransactions = !!this.transactionsBlocksPool.length;

            this.processFirstTransaction();
        }
    }

    sync(socket) {
        socket.emit('game.sync', this.state);
    }
}

export default Game;
