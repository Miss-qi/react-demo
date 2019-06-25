import React from 'react';
import ReactDom from 'react-dom';
import ControlPanel from './views/ControlPanel';
import { Provider } from "react-redux";
import store from './Store.js';
import TodoApp from "./TodoApp";
import CountDown from "./views/CountDown";

ReactDom.render(<Provider store={store}>
    <div>
        {/*<ControlPanel/>*/}
        <TodoApp/>
        <CountDown startCount={10}>
            {
                (count) => <div>{ count > 0 ? count:'新年快乐'}</div>
            }
        </CountDown>
    </div>
</Provider>, document.getElementById('app'));

module.hot.accept();
