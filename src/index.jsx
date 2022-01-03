import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { CartItemProvider } from './context';

ReactDOM.render(
  <React.StrictMode>
    <CartItemProvider>
      <App />
    </CartItemProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
