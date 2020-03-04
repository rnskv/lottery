import Module from 'src/core/Module';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

class Store extends Module {
    constructor({
        actionsTypes, actions, domains, reducers, ...params
    }) {
        super({ ...params });
        this.store = null;

        this.actionsTypes = actionsTypes;
        this.actions = actions;
        this.reducers = reducers;
        this.domains = domains;

        this.instanse = null;
    }

    get dispatch() {
        return this.instanse.dispatch;
    }

    get getState() {
        return this.instanse.getState;
    }

    provideApp() {
        Object.keys(this.domains).forEach((name) => {
            this.domains[name] = this.domains[name]({ app: this.app });
        });
    }

    create() {
        this.instanse = createStore(
            combineReducers(this.reducers),
            applyMiddleware(thunk),
        );
    }
}

export default Store;
