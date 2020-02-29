import 'babel-polyfill';
import React from 'react';
import history from 'src/modules/router/history';

import { Provider } from 'react-redux';

import { store } from 'src/redux';
import { ws } from 'src/modules/realtime';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import './cssVariables.css';
import './globalStyles.css';

import Login from 'ui/pages/Login';
import Logup from 'ui/pages/Logup';

import Main from 'ui/pages/Main';
import 'src/redux/realtime';

function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/logup">
                        <Logup />
                    </Route>
                    <Route path="/" exact>
                        <Main />
                    </Route>
                    <Route>
                        <div>404</div>
                    </Route>
                </Switch>
            </Router>
            <div hidden>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 14" id="collapse">
                    <path d="M0 7.022L4.912.045 8.257 0 3.344 6.904l4.913 7.051L4.912 14 0 7.022zm6.743 0L11.656.045 15 0l-4.912 6.904L15 13.955 11.656 14 6.743 7.022z" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.46 283.46" id="classic-logo">
                    <path d="M139.92 278.83c-75.57 0-137.05-61.48-137.05-137.05C2.87 66.2 64.35 4.73 139.92 4.73c75.58 0 137.06 61.48 137.06 137.05 0 75.57-61.48 137.05-137.06 137.05zm0-256.23c-65.7 0-119.18 53.47-119.18 119.18 0 65.7 53.47 119.18 119.18 119.18 65.7 0 119.18-53.47 119.18-119.18 0-65.7-53.47-119.18-119.18-119.18z" />
                    <path d="M196.6 198.76c0-4.66-3.77-8.42-8.42-8.42h-96.5c-4.64 0-8.4 3.76-8.4 8.42s3.76 8.42 8.4 8.42h96.5c4.65 0 8.42-3.78 8.42-8.42zM74.77 130.6c.14 0 .27 0 .4-.03l13.35 48.33h102.83l13.36-48.33.4.02c5.55 0 10.04-4.5 10.04-10.05 0-5.53-4.5-10-10.02-10s-10 4.47-10 10c0 1.07.16 2.1.5 3.08l-24.16 14.12-25.96-43.03c2.7-1.8 4.5-4.87 4.5-8.35 0-5.53-4.5-10.02-10.02-10.02-5.53 0-10.02 4.5-10.02 10 0 3.5 1.78 6.57 4.5 8.36l-25.97 43.04-24.16-14.12c.32-.97.5-2 .5-3.08 0-5.53-4.48-10-10-10-5.55 0-10.04 4.47-10.04 10s4.5 10.02 10 10.02z" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 25" id="notifications-icon">
                    <path d="m19.875 16.336-.522-4.413c-.03-3.749-2.558-7.053-6.15-8.18v-1.101c-.001-1.457-1.213-2.642-2.703-2.642s-2.701 1.185-2.701 2.642v1.1c-3.593 1.128-6.122 4.432-6.15 8.181l-.523 4.412a2.848 2.848 0 0 0 -1.126 2.272v.173c0 2.156 2.157 2.156 2.969 2.156h2.98c.346 2.15 2.173 3.8 4.373 3.8s4.027-1.65 4.372-3.8h3.337c.812 0 2.969 0 2.969-2.156v-.173c0-.903-.418-1.728-1.125-2.271zm-9.552 6.23c-.857 0-1.602-.521-1.972-1.282h3.943c-.369.761-1.114 1.282-1.971 1.282zm7.709-3.8h-15.063c-.35 0-.6-.011-.75-.036v-.123a.73.73 0 0 1 .43-.658l.55-.26.66-5.576.008-.125c0-3.055 2.216-5.725 5.269-6.35l.882-.18v-2.816c0-.26.217-.473.484-.473.266 0 .483.212.483.473v2.816l.882.18c3.053.624 5.269 3.295 5.269 6.35l.668 5.702.55.26a.73.73 0 0 1 .43.657v.123c-.151.024-.402.037-.752.037z" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" id="notification-success">
                    <g fill="#82E614" fill-rule="nonzero">
                        <path d="M12.46 0C5.59 0 0 5.59 0 12.46c0 6.87 5.59 12.458 12.46 12.458 6.87 0 12.458-5.589 12.458-12.459C24.918 5.59 19.33 0 12.46 0zm0 22.876c-5.745 0-10.418-4.673-10.418-10.417S6.715 2.043 12.46 2.043s10.417 4.672 10.417 10.416c0 5.744-4.673 10.417-10.417 10.417z"></path>
                        <path d="M17.85 7.677l-7.398 7.398-3.383-3.382a1.021 1.021 0 0 0-1.444 1.444l4.104 4.104a1.018 1.018 0 0 0 1.445 0l8.12-8.12a1.021 1.021 0 0 0-1.445-1.444z"></path>
                    </g>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" id="notification-error">
                    <g fill="#E61414" fill-rule="nonzero">
                        <path d="M12.46 0C5.59 0 0 5.59 0 12.46c0 6.87 5.59 12.458 12.46 12.458 6.87 0 12.458-5.589 12.458-12.459C24.918 5.59 19.33 0 12.46 0zm0 22.876c-5.745 0-10.418-4.673-10.418-10.417S6.715 2.043 12.46 2.043s10.417 4.672 10.417 10.416c0 5.744-4.673 10.417-10.417 10.417z"></path>
                        <path d="M13.904 12.46l3.523-3.524a1.021 1.021 0 1 0-1.444-1.445l-3.524 3.524-3.523-3.524A1.021 1.021 0 0 0 7.49 8.935l3.524 3.524-3.524 3.524a1.021 1.021 0 0 0 1.444 1.444l3.524-3.524 3.524 3.524a1.019 1.019 0 0 0 1.444 0 1.021 1.021 0 0 0 0-1.444l-3.523-3.524z"></path>
                    </g>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" id="settings-icon">
                    <path d="M23.586 13.606a.135.135 0 0 1-.115.136l-2.192.366a.7.7 0 0 0-.564.516 8.359 8.359 0 0 1-.908 2.187.706.706 0 0 0 .031.767l1.29 1.817a.142.142 0 0 1-.016.177l-1.556 1.555a.133.133 0 0 1-.099.042.128.128 0 0 1-.078-.026l-1.811-1.29a.705.705 0 0 0-.767-.03c-.684.407-1.42.71-2.187.908a.693.693 0 0 0-.517.563l-.37 2.192a.135.135 0 0 1-.136.115h-2.198a.135.135 0 0 1-.135-.115l-.365-2.192a.7.7 0 0 0-.517-.563 8.677 8.677 0 0 1-2.14-.877.722.722 0 0 0-.355-.094.687.687 0 0 0-.407.13l-1.827 1.3a.155.155 0 0 1-.078.026.14.14 0 0 1-.1-.042L3.915 19.62a.142.142 0 0 1-.015-.177l1.284-1.801a.714.714 0 0 0 .031-.773 8.278 8.278 0 0 1-.919-2.181.715.715 0 0 0-.563-.517l-2.208-.376a.135.135 0 0 1-.115-.135v-2.2c0-.067.047-.125.115-.135L3.7 10.96a.706.706 0 0 0 .57-.522 8.31 8.31 0 0 1 .892-2.192.697.697 0 0 0-.037-.762l-1.3-1.826a.142.142 0 0 1 .016-.178l1.556-1.555a.132.132 0 0 1 .099-.042c.031 0 .057.01.078.026l1.8 1.284c.23.162.533.172.773.031a8.276 8.276 0 0 1 2.182-.918.715.715 0 0 0 .516-.564l.376-2.208a.135.135 0 0 1 .136-.114h2.197c.068 0 .126.047.136.114l.365 2.177c.047.276.25.5.522.569.788.198 1.54.506 2.24.918.24.141.537.13.767-.031l1.8-1.294a.155.155 0 0 1 .078-.026.14.14 0 0 1 .1.041l1.555 1.556c.047.047.052.12.016.177l-1.29 1.811a.705.705 0 0 0-.03.767c.406.684.709 1.42.907 2.187a.693.693 0 0 0 .564.517l2.192.37c.068.01.115.068.115.136v2.197h-.005zm.12-3.72l-1.754-.298a9.902 9.902 0 0 0-.705-1.702l1.034-1.445a1.539 1.539 0 0 0-.167-1.989l-1.556-1.555a1.532 1.532 0 0 0-1.983-.167l-1.45 1.033a9.798 9.798 0 0 0-1.765-.725l-.292-1.733a1.542 1.542 0 0 0-1.524-1.29h-2.197c-.757 0-1.4.543-1.524 1.29L9.52 3.079a9.656 9.656 0 0 0-1.696.715L6.388 2.761a1.532 1.532 0 0 0-.897-.287c-.413 0-.804.162-1.091.454L2.84 4.483a1.545 1.545 0 0 0-.168 1.989l1.044 1.466a9.668 9.668 0 0 0-.694 1.707l-1.733.292A1.542 1.542 0 0 0 0 11.461v2.198c0 .756.543 1.398 1.29 1.524l1.774.302c.182.585.422 1.154.715 1.697l-1.028 1.43a1.539 1.539 0 0 0 .167 1.988l1.555 1.556a1.532 1.532 0 0 0 1.983.167l1.467-1.044c.527.276 1.08.5 1.649.678l.292 1.754A1.543 1.543 0 0 0 11.388 25h2.203c.757 0 1.399-.543 1.524-1.29l.297-1.753a9.903 9.903 0 0 0 1.702-.704l1.445 1.033c.261.188.575.287.898.287.413 0 .799-.162 1.091-.454l1.555-1.555a1.545 1.545 0 0 0 .167-1.989l-1.033-1.45a9.831 9.831 0 0 0 .705-1.702l1.753-.293a1.542 1.542 0 0 0 1.29-1.524V11.41a1.523 1.523 0 0 0-1.28-1.524z"></path>
                    <path d="M12.5 16.193A3.696 3.696 0 0 1 8.807 12.5 3.696 3.696 0 0 1 12.5 8.807a3.696 3.696 0 0 1 3.693 3.693 3.696 3.696 0 0 1-3.693 3.693m0-8.693c-2.759 0-5 2.241-5 5s2.241 5 5 5 5-2.241 5-5-2.241-5-5-5"></path>
                </svg>
            </div>
        </Provider>
    );
}

export default App;
