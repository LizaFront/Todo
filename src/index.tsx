import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';

import { Provider } from 'react-redux';
import store from 'store/store';

import GlobalStyles from './assets/styles/global.styles';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
            <GlobalStyles />
        </Provider>
    </React.StrictMode>
);
