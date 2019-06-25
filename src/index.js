import React from 'react';
import ReactDom from 'react-dom';
import ControlPanel from './views/ControlPanel';
import { Provider } from "react-redux";
import store from './Store.js';
import TodoApp from "./TodoApp";

ReactDom.render(<Provider store={store}>
    <div>
        {/*<ControlPanel/>*/}
        <TodoApp/>
    </div>
</Provider>, document.getElementById('app'));

module.hot.accept();
