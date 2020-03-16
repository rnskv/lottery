import PropTypes from 'prop-types';
import React from 'react';
import Button from 'ui/atoms/Button';

import {
    Container,
    BetSum,
} from './styled';

function _getBetSum(userItems) {
    return userItems.reduce((acc, item) => acc + item.cost, 0);
}

function BetInfo({
    userItems, sendBet, className, style,
}) {
    return (
        <Container className={className} style={style}>
            <BetSum>
                Сумма:
                {' '}
                <span>
                    { _getBetSum(userItems) }
                </span>
            </BetSum>
            <Button onClick={() => sendBet({ items: userItems })}>Сделать ставку</Button>
        </Container>
    );
}

BetInfo.propTypes = {
};

export default BetInfo;
