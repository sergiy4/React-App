import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import './index.css';
import { Provider } from 'react-redux';
import { store } from './libs/packages/store/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store.instance}>
      <App />
    </Provider>
  </React.StrictMode>
);
