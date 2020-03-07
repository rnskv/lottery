import PropTypes from 'prop-types';

import React, { useRef } from 'react';
import WinInfo from 'ui/organisms/WinInfo';
import Roulette from 'ui/organisms/Roulette';

import { getFormattedTime } from 'src/helpers/system';

import {
    Container,
    Title,
    ItemsCount,
    Bank,
    Timer,
    StartGame,
    Or,
    ItemsCountValue,
    ItemsText,
} from './styled';

function GameInfo({
    id, time, transactions, bank, users, roulette, isShowWinner, isVisible, openBetMaker,
}) {
    return (
        <Container>
            <Title>{`Игра #${id}`}</Title>
            {
                roulette.isVisible
                    ? (
                        <Roulette
                            transactions={transactions}
                            bank={bank}
                            users={users}
                            state={roulette}
                        />
                    )
                    : (
                        <StartGame>
                            <ItemsCount>
                                <ItemsCountValue
                                    percent={Math.round(transactions.length / 50 * 100)}
                                />
                                <ItemsText>
                                    { `${transactions.length} / 50` }
                                    <span>предметов</span>
                                </ItemsText>
                            </ItemsCount>
                            <Or>или</Or>
                            <Timer>
                                { getFormattedTime(time) }
                            </Timer>
                        </StartGame>
                    )
            }

            <Bank hidden={roulette.isVisible}>
                {'На кону: '}
                <span>
                    {`${bank.total}₽`}
                </span>
            </Bank>

            <WinInfo
                isVisible={roulette.isVisible}
                isShowWinner={isShowWinner}
                winner={roulette.winner}
                totalBank={bank.total}
                time={time}
                openBetMaker={openBetMaker}
            />
        </Container>
    );
}

GameInfo.propTypes = {
    id: PropTypes.number,
    openBetMaker: PropTypes.func.isRequired,
};


GameInfo.defaultProps = {
  id: 100500,
};

export default GameInfo;
