import React from 'react';
import { Route, Router } from 'react-router';
import { createBrowserHistory } from 'history';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import TodoApp from "./TodoApp";
import CountDown from "./views/CountDown";
import ControlPanel from "./views/ControlPanel";
import { Provider } from "react-redux";

const history = createBrowserHistory();
const Routes = ({ store }) => (
    <Provider store={store}>
        <Router history={history}>
            <Route exact path="/home" render={Home}/>
            <Route exact path="/about" render={About}/>
            <Route exact path="/todo" render={TodoApp}/>
            <Route exact path="/count-down" render={CountDown}/>
            <Route exact path="/control-panel" render={ControlPanel}/>
            <Route exact path="/" render={NotFound}/>
        </Router>
    </Provider>
)

export default Routes;
