import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/es/storage/session'
import thunk from 'redux-thunk';
import session from './session'
import decksReducer from './decks';
import cardsReducer from './cards';


const persistConfig = {
  key: 'root',
  storage: storageSession,
  whitelist: ['decks', 'cards']
}

const rootReducer = combineReducers({
  session,
  decks: decksReducer,
  cards: cardsReducer,
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

function configureStore(preloadedState) {
  return createStore(persistReducer(persistConfig, rootReducer), preloadedState, enhancer);
};

export default configureStore