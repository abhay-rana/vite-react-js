import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { ResetLocalState } from '~/reducers/container-reducer';
import store, { persistor } from '~/reducers/store';

import App from './app';
import './styles/global.css';

// Create a client
const queryClient = new QueryClient();

function resetLocalState() {
    store.dispatch(ResetLocalState());
}

ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
    <Provider store={store}>
        <PersistGate
            loading={<p>Loading...</p>}
            persistor={persistor}
            onBeforeLift={resetLocalState}
        >
            <QueryClientProvider client={queryClient}>
                <App />
                {/* <ReactQueryDevtools initialIsOpen={false} /> */}
            </QueryClientProvider>
            <Toaster />
        </PersistGate>
    </Provider>
    // </React.StrictMode>
);
