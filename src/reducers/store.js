import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import { CounterReducer } from '~/reducers/counter-reducer';
import { RehydrationReducer } from '~/reducers/rehydration-reducer';

import { APP_MODE } from '~/env';

const reducers = combineReducers({
    rehydration_store: RehydrationReducer,
    counter_store: CounterReducer,
});

const persistConfig = {
    key: 'root',
    blacklist: ['rehydration_store'],
    storage,
};

const persist_reducer = persistReducer(persistConfig, reducers);

// const sentryReduxEnhancer = SentryLogger.createReduxEnhancer({
//     // Optionally pass options listed below
// });

let composeEnhancers;

const middlewares = [
    thunk,
    // sentryReduxEnhancer,
];

if (APP_MODE === 'development') {
    composeEnhancers =
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                  // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
                  //   trace: true, trace will be impact in performance so make it commented if you don't need it
              })
            : compose;
} else composeEnhancers = compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));
export const store = createStore(persist_reducer, enhancer);
export const persistor = persistStore(store);

export default store;
