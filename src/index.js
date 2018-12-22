import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Screen1 from './components/screen1' ;
import Screen2 from './components/screen2' ;
import Screen3 from './components/screen3' ;
import Screen4 from './components/screen4' ;
import Screen6 from './components/screen6' ;
import AddProduct from './components/AddProduct';
import Loading from './components/common/loading' ;
import ButtonDark from './components/common/button' ;
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<AddProduct/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
