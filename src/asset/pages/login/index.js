import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router,Switch, Route, Redirect } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducers from 'src/store/reducer';
import {connect,Provider} from 'react-redux';
import Login from './login';
import Register from './register';
const Store = createStore(rootReducers);
ReactDOM.render(
    <Provider store={Store}>
        <Router basename="login.html">
            <Switch>
                <Route exact path = "/" component = { Login } />
                <Route path = "/register" component = { Register } />
                <Redirect to ="/"/>
            </Switch>
            
        </Router>
    </Provider>,
document.getElementById('root'));