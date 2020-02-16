import * as betMakerDomain from 'src/redux/betMaker/domains';
import * as betMakerActions from 'src/redux/betMaker/actions';

export function mapDispatchToProps(dispatch) {
    return {
        open: () => dispatch(betMakerActions.open()),
        close: () => dispatch(betMakerActions.close()),
        sendTransaction: () => dispatch(betMakerDomain.sendTransaction()),
    };
}

export function mapStateToProps(state) {
    return {
        isOpened: state.betMaker.isOpened,
        allValues: state.betMaker.allValues,
        userValues: state.betMaker.userValues,
    };
}
