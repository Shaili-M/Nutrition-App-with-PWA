import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import configureStore from './store/store';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render( 
    <Provider store = {configureStore()}>
        <App/>
    </Provider>,
    // <React.StrictMode>
    //     <App />
    // </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();