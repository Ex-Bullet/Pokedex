import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './components/App';
import Router from './router'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
