import React, { Component } from 'react';
import Counter from './Counter';

const style = {
    margin: '20px'
};

class ControlPanel extends Component {
    constructor(props) {
        super(props);
        this.initValues = [0, 10, 20];
        const initSum = this.initValues.reduce((a, b) => a + b, 0);
        this.state = {
            sum: initSum
        }
    }

    onUpdate = (newValue, previousValue) => {
        const valueChange = newValue - previousValue;
        this.setState({ sum: this.state.sum + valueChange });
    }

    render() {

        return (
            <div style={style}>
                <Counter caption="First" onUpdate={this.onUpdate}/>
                <Counter caption="Second" initValue={10} onUpdate={this.onUpdate}/>
                <Counter caption="Third" initValue={20} onUpdate={this.onUpdate}/>
                <button onClick={ () => this.forceUpdate() }>
                    Click me to re-render!
                </button>
                <div>Total Count: {this.state.sum}</div>
            </div>
        )
    }
}

export default ControlPanel;
