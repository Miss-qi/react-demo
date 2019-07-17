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
import App from './pages/App';
import ChangeColor from "./pages/ChangeColor";

const history = createBrowserHistory();
const Routes = ({ store }) => (
    <Provider store={store}>
        <Router history={history}>
            <App>
                <Route exact path="/home" render={Home}/>
                <Route exact path="/about" render={About}/>
            </App>
            <Route exact path="/todo" render={TodoApp}/>
            <Route exact path="/count-down" render={CountDown}/>
            <Route exact path="/control-panel" component={ControlPanel}/>
            <Route exact path="/change-color" component={ChangeColor}/>
            <Route exact path="/" render={NotFound}/>
        </Router>
    </Provider>
)

export default Routes;
