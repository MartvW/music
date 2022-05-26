import React from 'react';
import ReactDOM from 'react-dom/client';
import '@sass/index.scss';
import App from './ts/App';

const root = ReactDOM.createRoot(
  document.getElementById('app') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
