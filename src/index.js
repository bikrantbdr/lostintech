import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import LOADER from './components/Loading/loading.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
const loader = ReactDOM.createRoot(document.getElementById('loader'));

loader.render(
  <>
    <LOADER/>
  </>
);

root.render(
  <App/>
);

