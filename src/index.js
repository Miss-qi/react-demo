import React from 'react';
import ReactDom from 'react-dom';
import Welcome from './components/Welcome';
import Example from './components/Example';
import { Counter } from "./components/Example";
import ControlPanel from './components/ControlPanel';

const title = "react webpack babel set up";
const element = <div>{title}</div>;

ReactDom.render(<div>
    {/*<Welcome name="test"/>*/}
    {/*<Example/>*/}
    <ControlPanel/>
    {/*<Counter initialCount={0}/>*/}
</div>, document.getElementById('app'));

module.hot.accept();
