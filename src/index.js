import React from 'react';
import ReactDom from 'react-dom';
import store from './Store.js';
import Routes from "./Routes";

ReactDom.render(<Routes store={store}/>, document.getElementById('app'));

module.hot.accept();
