import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';

import { Provider } from 'react-redux';
import store, { persistor } from './store';
import history from './services/history';
import GlobalStyle from './styles/global';
import Header from './components/header';
import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Header />
          <Routes />
          <GlobalStyle />
          <ToastContainer autoClose={3000} className="toast-container" />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
