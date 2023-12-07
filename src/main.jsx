import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Modal from 'react-modal';
import { Provider } from 'react-redux';
import Store from './redux/store.js';

// Set the app element for react-modal
Modal.setAppElement('#root');

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
  <React.StrictMode>

    <App />

  </React.StrictMode>
  </Provider>
);
