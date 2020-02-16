import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { slideInDown } from 'react-animations';

import Button from 'ui/atoms/Button';
import DefaultTemplate from 'ui/templates/Default';


import Transaction from 'ui/molecules/Transaction';

import { rootApi } from 'src/redux/root/api';
import UsersBanks from 'ui/organisms/UsersBanks';
import GameInfo from 'ui/organisms/GameInfo';
import GameBeginFooter from 'ui/organisms/GameBeginFooter';
import GameControls from 'ui/organisms/GameControls';
import GameEndFooter from 'ui/organisms/GameEndFooter';
import BetMaker from 'ui/organisms/BetMaker';

import { mapStateToProps, mapDispatchToProps } from './connect';

rootApi.setBearerFromLocalStorage();

const StyledExperiment = styled.div`
  @keyframes slide { from { margin-top:-${({ transactionsLength }) => 108 * transactionsLength}px; } to { margin-top: 0; }  }
  transition: 3s margin-top;
  transition-delay: .1s;
  
  animation: .4s ease-out  slide;
`;
const handler = async () => {
    const result = await rootApi.execute('test');
    alert(result.body);
};

const isSubscribed = false;

function Main({
    time,
    hash,
    secret,
    transactions,
    users,
    join,
    bank,
    transaction,
    subscribe,
    token,
    transactionsPoolLength,
    isWaitingTransactions,
    isShowWinner,
    userDepositsCount,
    roulette,
    notifications,
    openBetMaker,
}) {
    useEffect(() => {
        if (isSubscribed) return;
        console.log('subscribed');
        subscribe();
    }, []);
    return (
        <DefaultTemplate>
            Моих транзакций в обработке -
            {' '}
            { userDepositsCount }
            <GameInfo
                time={time}
                transactions={transactions}
                bank={bank}
                users={users}
                roulette={roulette}
                isShowWinner={isShowWinner}
            />
            {/* <div> */}
            {/*    { !token ? <Link to="/login">Go to login</Link> : token} */}
            {/* </div> */}
            {/* <Button onClick={handler}>Test action with token</Button> */}
            {/* <br /> */}
            {/* <br /> */}
            {/* <p> */}
            {/*    Время до конца -*/}
            {/*    { time } */}
            {/* </p> */}

            {/* { */}
            {/*    isWaitingTransactions ? `Не все транзакции этой игры обработаны, в очереди на обработку еще ${ transactionsPoolLength } траназкции` : '123123' */}
            {/* } */}

            {/* <p> */}
            {/*    Хэш раунда -*/}
            {/*    { hash } */}
            {/* </p> */}

            {/* <p> */}
            {/*    Победитель раунда -*/}
            {/*    { winner.transaction && winner.transaction.user.name } */}
            {/* </p> */}

            {/* <p> */}
            {/*    Победный билет -*/}
            {/*    { winner && winner.ticket } */}
            {/* </p> */}

            {/* <p> */}
            {/*    Секретно число раунда -*/}
            {/*    { secret || 'secret'} */}
            {/* </p> */}
            {/* <div> */}
            {/*    { `Банк игры ${ bank.total } рублей` } */}
            {/* </div> */}
            <BetMaker />
            <GameControls
                transaction={transaction}
                openBetMaker={openBetMaker}
            />
            <UsersBanks users={users} bank={bank} />
            { isShowWinner ? <GameEndFooter secret={secret} /> : null }
            <div>

                <StyledExperiment transactionsLength={1} key={transactions.length}>
                    { console.log(transactions)}
                    {
                        transactions.map((transaction, index) => (
                            <Transaction
                                key={`${transaction.ticketTo}`}
                                index={index}
                                user={transaction.user}
                                value={transaction.value}
                                ticketFrom={transaction.ticketFrom}
                                ticketTo={transaction.ticketTo}
                            />
                        ))
                    }
                </StyledExperiment>

            </div>
            <GameBeginFooter hash={hash} />
        </DefaultTemplate>
    );
}

Main.propTypes = {
    token: PropTypes.string.isRequired,
    subscribe: PropTypes.func.isRequired,
    users: PropTypes.arrayOf(PropTypes.object).isRequired,
    join: PropTypes.func.isRequired,
};

Main.defaultProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
