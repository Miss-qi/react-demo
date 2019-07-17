import React, { Component } from 'react';
import randomColor from 'randomcolor';

const styles = {
    width: 500,
    height: 500,
};

class ChangeColor extends Component{
    constructor(props) {
        super(props);

        this.state = {
            backgroundColor: {
                backgroundColor: randomColor()
            },
            clickTime: 0,
            initialTime: performance.now()
        };
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                backgroundColor: {
                    backgroundColor: randomColor()
                }
            })
        }, 1000);
    }

    handleClick = () => {
        this.setState({
            clickTime: performance.now() - this.state.initialTime
        })
    };

    render() {
        return (
            <div>
                <div style={{...styles, ...this.state.backgroundColor}} onClick={this.handleClick}>
                </div>
                <div>点击时长：{this.state.clickTime}</div>
            </div>
        )
    }
}

export default ChangeColor;
