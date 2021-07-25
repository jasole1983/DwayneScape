import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store';
import { ModalProvider } from "./context/Modal"
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist'
import { createStoreHook, applyMiddleware  } from 'react-redux';

export const store = configureStore();

export const persistor = persistStore(store);



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ModalProvider>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </ModalProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
  );
  