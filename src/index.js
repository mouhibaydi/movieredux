import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootreducer from "./reducers"
import { createStore } from "redux"
import { Provider } from "react-redux"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from "react-router-dom"
import Description from "./description"

const store = createStore(rootreducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
        <Route exact path="/" component={App} />
        <Route exact path="/:name" component={Description} />
    </BrowserRouter>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
