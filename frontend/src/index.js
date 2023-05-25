import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChoreosContextProvider } from './context/choreos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChoreosContextProvider>
      <App />
    </ChoreosContextProvider>
  </React.StrictMode>
);

