import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import CounterReducer from '~/reducers/counter-reducer';

import { APP_MODE } from '~/env';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['store_name'],
};

const reducers = combineReducers({
    counter_store: CounterReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    devTools: APP_MODE === 'development',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: true,
            serializableCheck: false,
            immutableCheck: false,
        }),
});
export const persistor = persistStore(store);

export default store;
