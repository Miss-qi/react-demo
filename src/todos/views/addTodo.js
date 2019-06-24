import React, { Component } from "react";
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { addTodo } from "../actions";

class AddTodo extends Component{

    onSubmit = (event) => {
        event.preventDefault();

        const input = this.input;
        if (!input.value.trim())  {
            return;
        }
        this.props.onAdd(input.value);
        input.value = '';
    }

    refInput = (node) => {
        this.input = node;
    }

    render() {
        return (
            <div className="add-todo">
                <form onSubmit={this.onSubmit}>
                    <input className="new-todo" ref={this.refInput}/>
                    <button className="add-btn" type="submit">
                        添加
                    </button>
                </form>
            </div>
        )
    }
}

AddTodo.propTypes = {
    onAdd: propTypes.func.isRequired
};

const mapDispatchToProps = {
    onAdd: addTodo
};

export default connect(null, mapDispatchToProps)(AddTodo);
