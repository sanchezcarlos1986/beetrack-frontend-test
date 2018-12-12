// @External Dependencies
import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

// @Dependencies
import rootReducer from '../Reducers'

const persistConfig = {
  key: 'beetrack-frontend',
  storage,
  blacklist: [] // Nombre de los reducers que no queremos guardar en localStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  persistedReducer,
  composeEnhacers(applyMiddleware(thunk))
)
const persistor = persistStore(store)

export { store, persistor }
