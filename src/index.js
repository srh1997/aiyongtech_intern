import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import todoApp from "./reducers/reducer";
import initialState from "./data/initialState";
console.log(initialState);
let store=createStore(todoApp,initialState);
console.log(store.getState());
ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));

serviceWorker.register();
