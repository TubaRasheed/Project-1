import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from "./components/Router";
// import registerServiceWorker from './registerServiceWorker';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<Router />, document.getElementById('root'));
serviceWorker.unregister();
// registerServiceWorker();





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

