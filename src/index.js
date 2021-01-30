import React from 'react';
import { hydrate, render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store, history } from './redux'
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

import config from './config.js'

import Cookies from 'js-cookie';

const currentLastTimestamp = Cookies.get('lastTimestamp') || process.env.REACT_APP_LAST_INIT_TIMESTAMP || "";
if ( currentLastTimestamp ){
    const storedLastTimestamp = localStorage.getItem('lastTimestamp');
    if (storedLastTimestamp < currentLastTimestamp){
        persistor.purge();
    }

    localStorage.setItem('lastTimestamp', currentLastTimestamp);
}

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
