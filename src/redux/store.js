import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { persistStore } from 'redux-persist'
import rootReducer from './root-reducer'
import rootSaga from './root-saga'
import createSagaMiddleware from 'redux-saga'


const sagaMiddleware = createSagaMiddleware()
// middlewares
const middlewares = [sagaMiddleware]

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)

export default { store, persistor }