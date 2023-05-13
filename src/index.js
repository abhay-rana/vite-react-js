import { ClickToComponent } from 'click-to-react-component';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';

import store from '~/reducers';

//for tailwind
import App from './app';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <Provider store={store}>
            <App />
            <Toaster />
        </Provider>
        {/* <ClickToComponent /> */}
    </>
);
