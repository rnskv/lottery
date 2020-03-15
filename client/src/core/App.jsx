import 'babel-polyfill';
import React from 'react';

import { Provider } from 'react-redux';

import {
    Switch,
    Route,
} from 'react-router-dom';

import './cssVariables.css';
import './globalStyles.css';

import Login from 'ui/pages/Login';
import Logup from 'ui/pages/Logup';
import Deposit from 'ui/pages/Deposit';
import Withdraw from 'ui/pages/Withdraw';

import Lottery from 'ui/pages/Lottery';

function App({ store }) {
    if (typeof window === 'undefined') return 'Hello from server';

    return (
        <Provider store={store}>
            <Switch>
                <Route path="/" exact>
                    <Deposit />
                </Route>
                <Route path="/deposit">
                    <Deposit />
                </Route>
                <Route path="/withdraw">
                    <Withdraw />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/logup">
                    <Logup />
                </Route>
                <Route path="/game/lottery">
                    <Lottery />
                </Route>
                <Route path="/close">
                    {
                        window.close()
                    }
                </Route>
                <Route>
                    <div>404</div>
                </Route>
            </Switch>
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
                    <g fill="#82E614" fillRule="nonzero">
                        <path d="M12.46 0C5.59 0 0 5.59 0 12.46c0 6.87 5.59 12.458 12.46 12.458 6.87 0 12.458-5.589 12.458-12.459C24.918 5.59 19.33 0 12.46 0zm0 22.876c-5.745 0-10.418-4.673-10.418-10.417S6.715 2.043 12.46 2.043s10.417 4.672 10.417 10.416c0 5.744-4.673 10.417-10.417 10.417z" />
                        <path d="M17.85 7.677l-7.398 7.398-3.383-3.382a1.021 1.021 0 0 0-1.444 1.444l4.104 4.104a1.018 1.018 0 0 0 1.445 0l8.12-8.12a1.021 1.021 0 0 0-1.445-1.444z" />
                    </g>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" id="notification-error">
                    <g fill="#E61414" fillRule="nonzero">
                        <path d="M12.46 0C5.59 0 0 5.59 0 12.46c0 6.87 5.59 12.458 12.46 12.458 6.87 0 12.458-5.589 12.458-12.459C24.918 5.59 19.33 0 12.46 0zm0 22.876c-5.745 0-10.418-4.673-10.418-10.417S6.715 2.043 12.46 2.043s10.417 4.672 10.417 10.416c0 5.744-4.673 10.417-10.417 10.417z" />
                        <path d="M13.904 12.46l3.523-3.524a1.021 1.021 0 1 0-1.444-1.445l-3.524 3.524-3.523-3.524A1.021 1.021 0 0 0 7.49 8.935l3.524 3.524-3.524 3.524a1.021 1.021 0 0 0 1.444 1.444l3.524-3.524 3.524 3.524a1.019 1.019 0 0 0 1.444 0 1.021 1.021 0 0 0 0-1.444l-3.523-3.524z" />
                    </g>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" id="settings-icon">
                    <path d="M23.586 13.606a.135.135 0 0 1-.115.136l-2.192.366a.7.7 0 0 0-.564.516 8.359 8.359 0 0 1-.908 2.187.706.706 0 0 0 .031.767l1.29 1.817a.142.142 0 0 1-.016.177l-1.556 1.555a.133.133 0 0 1-.099.042.128.128 0 0 1-.078-.026l-1.811-1.29a.705.705 0 0 0-.767-.03c-.684.407-1.42.71-2.187.908a.693.693 0 0 0-.517.563l-.37 2.192a.135.135 0 0 1-.136.115h-2.198a.135.135 0 0 1-.135-.115l-.365-2.192a.7.7 0 0 0-.517-.563 8.677 8.677 0 0 1-2.14-.877.722.722 0 0 0-.355-.094.687.687 0 0 0-.407.13l-1.827 1.3a.155.155 0 0 1-.078.026.14.14 0 0 1-.1-.042L3.915 19.62a.142.142 0 0 1-.015-.177l1.284-1.801a.714.714 0 0 0 .031-.773 8.278 8.278 0 0 1-.919-2.181.715.715 0 0 0-.563-.517l-2.208-.376a.135.135 0 0 1-.115-.135v-2.2c0-.067.047-.125.115-.135L3.7 10.96a.706.706 0 0 0 .57-.522 8.31 8.31 0 0 1 .892-2.192.697.697 0 0 0-.037-.762l-1.3-1.826a.142.142 0 0 1 .016-.178l1.556-1.555a.132.132 0 0 1 .099-.042c.031 0 .057.01.078.026l1.8 1.284c.23.162.533.172.773.031a8.276 8.276 0 0 1 2.182-.918.715.715 0 0 0 .516-.564l.376-2.208a.135.135 0 0 1 .136-.114h2.197c.068 0 .126.047.136.114l.365 2.177c.047.276.25.5.522.569.788.198 1.54.506 2.24.918.24.141.537.13.767-.031l1.8-1.294a.155.155 0 0 1 .078-.026.14.14 0 0 1 .1.041l1.555 1.556c.047.047.052.12.016.177l-1.29 1.811a.705.705 0 0 0-.03.767c.406.684.709 1.42.907 2.187a.693.693 0 0 0 .564.517l2.192.37c.068.01.115.068.115.136v2.197h-.005zm.12-3.72l-1.754-.298a9.902 9.902 0 0 0-.705-1.702l1.034-1.445a1.539 1.539 0 0 0-.167-1.989l-1.556-1.555a1.532 1.532 0 0 0-1.983-.167l-1.45 1.033a9.798 9.798 0 0 0-1.765-.725l-.292-1.733a1.542 1.542 0 0 0-1.524-1.29h-2.197c-.757 0-1.4.543-1.524 1.29L9.52 3.079a9.656 9.656 0 0 0-1.696.715L6.388 2.761a1.532 1.532 0 0 0-.897-.287c-.413 0-.804.162-1.091.454L2.84 4.483a1.545 1.545 0 0 0-.168 1.989l1.044 1.466a9.668 9.668 0 0 0-.694 1.707l-1.733.292A1.542 1.542 0 0 0 0 11.461v2.198c0 .756.543 1.398 1.29 1.524l1.774.302c.182.585.422 1.154.715 1.697l-1.028 1.43a1.539 1.539 0 0 0 .167 1.988l1.555 1.556a1.532 1.532 0 0 0 1.983.167l1.467-1.044c.527.276 1.08.5 1.649.678l.292 1.754A1.543 1.543 0 0 0 11.388 25h2.203c.757 0 1.399-.543 1.524-1.29l.297-1.753a9.903 9.903 0 0 0 1.702-.704l1.445 1.033c.261.188.575.287.898.287.413 0 .799-.162 1.091-.454l1.555-1.555a1.545 1.545 0 0 0 .167-1.989l-1.033-1.45a9.831 9.831 0 0 0 .705-1.702l1.753-.293a1.542 1.542 0 0 0 1.29-1.524V11.41a1.523 1.523 0 0 0-1.28-1.524z" />
                    <path d="M12.5 16.193A3.696 3.696 0 0 1 8.807 12.5 3.696 3.696 0 0 1 12.5 8.807a3.696 3.696 0 0 1 3.693 3.693 3.696 3.696 0 0 1-3.693 3.693m0-8.693c-2.759 0-5 2.241-5 5s2.241 5 5 5 5-2.241 5-5-2.241-5-5-5" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" id="tech-support-icon">
                    <path d="M20.303 3.232A10.963 10.963 0 0 0 12.5 0a10.963 10.963 0 0 0-7.803 3.232 10.953 10.953 0 0 0-3.208 7.07H0v7.325h5.438v-7.324h-2.48a9.53 9.53 0 0 1 2.28-5.494L7.29 6.86l.518-.518A6.595 6.595 0 0 1 12.5 4.395c1.77 0 3.437.691 4.693 1.947l.518.518 2.05-2.051a9.53 9.53 0 0 1 2.281 5.494h-2.48v7.324h1.935a5.182 5.182 0 0 1-5.123 4.442h-.824a2.202 2.202 0 0 0-2.073-1.466h-1.954A2.201 2.201 0 0 0 9.324 22.8c0 1.213.986 2.199 2.199 2.199h1.954c.956 0 1.77-.613 2.073-1.466h.824c3.414 0 6.233-2.59 6.599-5.907H25v-7.324h-1.49a10.953 10.953 0 0 0-3.207-7.07zm-16.33 8.536v4.394H1.465v-4.394h2.508zM17.688 4.81A8.039 8.039 0 0 0 12.5 2.93 8.04 8.04 0 0 0 7.312 4.81L6.274 3.773A9.529 9.529 0 0 1 12.5 1.465c2.375 0 4.551.87 6.226 2.308l-1.038 1.038zm-4.21 18.724h-1.955a.734.734 0 0 1 0-1.467h1.954a.734.734 0 0 1 0 1.467zm10.057-7.373h-2.508v-4.394h2.508v4.394z" />
                    <path d="M9.333 15.401v-1.602h2.666V9H8v1.599h2.667v1.602H8.001V17H12v-1.599zM15.667 9v3.2h-1.334V9H13v4.8h2.667V17H17V9z" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 546.3 258.1" id="currency-logo">
                    <path
                        fill="#f6e444"
                        className="cls-1"
                        d="M313.6,257.3H231a44,44,0,0,1-43.9-43.9V45.7A44,44,0,0,1,231,1.8h82.6a44,44,0,0,1,43.9,43.9V213.4A44,44,0,0,1,313.6,257.3ZM231,15.9a29.81,29.81,0,0,0-29.8,29.8V213.4A29.87,29.87,0,0,0,231,243.2h82.6a29.81,29.81,0,0,0,29.8-29.8V45.7a29.81,29.81,0,0,0-29.8-29.8ZM501.8,258.1H419.2a44,44,0,0,1-43.9-43.9V46.4A44,44,0,0,1,419.2,2.5h82.6a44,44,0,0,1,43.9,43.9V214.1a44,44,0,0,1-43.9,44ZM419.2,16.6a29.81,29.81,0,0,0-29.8,29.8V214.1a29.87,29.87,0,0,0,29.8,29.8h82.6a29.81,29.81,0,0,0,29.8-29.8V46.4a29.81,29.81,0,0,0-29.8-29.8H419.2ZM126.8,257.3H44.2A44,44,0,0,1,.3,213.4V45.7A44,44,0,0,1,44.2,1.8h82.6a44,44,0,0,1,43.9,43.9V213.4A44,44,0,0,1,126.8,257.3ZM44.2,15.9A29.81,29.81,0,0,0,14.4,45.7V213.4a29.87,29.87,0,0,0,29.8,29.8h82.6a29.81,29.81,0,0,0,29.8-29.8V45.7a29.81,29.81,0,0,0-29.8-29.8Z"
                    />
                    <path
                        fill="white"
                        d="M322.83,151.57a39.61,39.61,0,0,0-3.45-8.38,28.36,28.36,0,0,0-5.81-7,69.35,69.35,0,0,0-6.8-5.48,66.25,66.25,0,0,0-8.28-4.66q-5.26-2.58-8.33-3.84t-8.88-3.45q-5.15-2-7.67-3t-6.63-3a38.65,38.65,0,0,1-6.14-3.4,48.23,48.23,0,0,1-4.33-3.62,12.34,12.34,0,0,1-3.23-4.55,14.5,14.5,0,0,1-.93-5.26q0-7.45,6.58-12.16t17-4.71a36.53,36.53,0,0,1,9.37,1.26,49,49,0,0,1,8.16,2.85,56.71,56.71,0,0,1,6.41,3.51q3,1.92,4.27,2.9c.84.66,1.37,1.1,1.59,1.32a3.49,3.49,0,0,0,3,.77A3,3,0,0,0,311.21,90l8.88-16a3.17,3.17,0,0,0-.55-4.17c-.44-.44-1-.95-1.65-1.53s-2.08-1.64-4.27-3.18a52.9,52.9,0,0,0-7-4.11,70.38,70.38,0,0,0-9.54-3.67A60.8,60.8,0,0,0,285,54.8V35.51A3.37,3.37,0,0,0,281.51,32h-14.8a3.56,3.56,0,0,0-3.51,3.51V55.24Q246,58.52,235.26,69.92a37.48,37.48,0,0,0-10.74,26.52,38.06,38.06,0,0,0,.93,8.55,43.76,43.76,0,0,0,2.3,7.29,26.82,26.82,0,0,0,3.89,6.36,68.08,68.08,0,0,0,4.77,5.37,38.71,38.71,0,0,0,5.86,4.66q3.62,2.41,6.19,3.89t6.85,3.39q4.27,1.92,6.74,2.91t6.74,2.74q5.92,2.3,8.77,3.56t7.24,3.51a30,30,0,0,1,6.41,4.11,20.6,20.6,0,0,1,3.67,4.6,11.1,11.1,0,0,1,1.65,5.81q0,8.66-6.74,13.37a26.57,26.57,0,0,1-15.62,4.71,38.29,38.29,0,0,1-8.11-.87q-14.25-2.85-26.63-13.7l-.22-.22a2.72,2.72,0,0,0-2.63-1,3.41,3.41,0,0,0-2.52,1.32L222.77,181.6a3.33,3.33,0,0,0,.22,4.49q.55.66,1.92,2a63.43,63.43,0,0,0,5.1,4.11,67.26,67.26,0,0,0,19.24,10.14,69.2,69.2,0,0,0,14,3.39v19.18a3.55,3.55,0,0,0,3.51,3.51h14.8a3.37,3.37,0,0,0,3.51-3.51V205.71q17.43-2.85,28.33-15a41.7,41.7,0,0,0,10.91-28.88A36,36,0,0,0,322.83,151.57Z"
                    />
                    <path
                        fill="white"
                        d="M38.13,216.31A26.82,26.82,0,0,0,42,222.67,68.08,68.08,0,0,0,46.79,228c.45.45,1,.9,1.48,1.36h59.12q-4.22-2-6.85-3.12-3.07-1.26-8.88-3.45-5.15-2-7.67-3t-6.63-3a38.64,38.64,0,0,1-6.14-3.4,48.21,48.21,0,0,1-4.33-3.62,12.34,12.34,0,0,1-3.23-4.55,14.5,14.5,0,0,1-.93-5.26q0-7.45,6.58-12.16t17-4.71a36.53,36.53,0,0,1,9.37,1.26,49,49,0,0,1,8.16,2.85,56.7,56.7,0,0,1,6.41,3.51q3,1.92,4.27,2.9c.84.66,1.37,1.1,1.59,1.32a3.49,3.49,0,0,0,3,.77,3,3,0,0,0,2.52-1.75l8.88-16a3.17,3.17,0,0,0-.55-4.17c-.44-.44-1-.95-1.65-1.53s-2.08-1.64-4.27-3.18a52.91,52.91,0,0,0-7-4.11,70.38,70.38,0,0,0-9.54-3.67,60.79,60.79,0,0,0-12.11-2.52V139.54A3.37,3.37,0,0,0,91.89,136H77.09a3.56,3.56,0,0,0-3.51,3.51v19.73Q56.38,162.55,45.64,174A37.48,37.48,0,0,0,34.9,200.47a38.06,38.06,0,0,0,.93,8.55A43.76,43.76,0,0,0,38.13,216.31Z"
                    />
                    <path
                        fill="white"
                        d="M503.34,35.72A24.42,24.42,0,0,0,500.7,32H447.55l5.21,2.12q5.92,2.3,8.77,3.56t7.24,3.51a30,30,0,0,1,6.41,4.11,20.6,20.6,0,0,1,3.67,4.6,11.1,11.1,0,0,1,1.65,5.81q0,8.66-6.74,13.37a26.57,26.57,0,0,1-15.62,4.71,38.29,38.29,0,0,1-8.11-.87q-14.25-2.85-26.63-13.7l-.22-.22a2.72,2.72,0,0,0-2.63-1A3.41,3.41,0,0,0,418,59.33L406.74,74.13a3.33,3.33,0,0,0,.22,4.49q.55.66,1.92,2a63.43,63.43,0,0,0,5.1,4.11A73.85,73.85,0,0,0,422.08,90a73.7,73.7,0,0,0,11.12,4.88,69.2,69.2,0,0,0,14,3.39v19.18a3.55,3.55,0,0,0,3.51,3.51h14.8a3.37,3.37,0,0,0,3.51-3.51V98.24q17.43-2.85,28.33-15A41.7,41.7,0,0,0,508.23,54.4a36,36,0,0,0-1.44-10.3A39.61,39.61,0,0,0,503.34,35.72Z"
                    />
                </svg>

                <svg version="1.1" id="spinner" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 100 100" xmlSpace="preserve">
                    <rect fill="none" stroke="#fff" strokeWidth="4" x="25" y="25" width="50" height="50" transform="rotate(360 50 50)">
                        <animateTransform
                            attributeName="transform"
                            dur="0.8s"
                            from="0 50 50"
                            to="180 50 50"
                            type="rotate"
                            id="strokeBox"
                            attributeType="XML"
                            begin="rectBox.end"
                        />
                    </rect>
                    <rect x="27" y="27" fill="#fff" width="46" height="0">
                        <animate
                            keyTimes="0; 0.15; 0.3; 0.45; 0.6; 0.75; 0.9; 1"
                            keySplines=".42 0 1 1;
                                        0 0 .59 1;
                                        .42 0 1 1;
                                        0 0 .59 1;
                                        .42 0 1 1;
                                        0 0 .59 1;
                                        .42 0 1 1;
                                        0 0 .59 1;"
                            attributeName="height"
                            dur="1.3s"
                            attributeType="XML"
                            from="50"
                            to="0"
                            id="rectBox"
                            fill="freeze"
                            begin="0s; strokeBox.end"
                        />
                    </rect>
                </svg>
            </div>
        </Provider>
    );
}

export default App;
