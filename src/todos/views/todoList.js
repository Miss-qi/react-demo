import React from "react";
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import TransitionGroup from 'react-addons-css-transition-group';
import TodoItem from './todoItem';
import { removeTodo, toggleTodo } from "../actions";
import { selectVisibleTodos } from "../selector";

const TodoList = ({ todos, onToggleTodo, onRemoveTodo }) => {
    return (
        <ul>
            <TransitionGroup
                transitionName="fade"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
            >
                {
                    todos.map(item => (
                        <TodoItem
                            key={item.id}
                            text={item.text}
                            completed={item.completed}
                            onToggle={() => onToggleTodo(item.id)}
                            onRemove={() => onRemoveTodo(item.id)}
                        />
                    ))
                }
            </TransitionGroup>
        </ul>
    )
}

TodoList.propTypes = {
    todos: propTypes.array.isRequired
};


const mapStateToProps = (state) => {
    return {
        todos: selectVisibleTodos(state)
    };
};

const mapDispatchToProps = {
    onToggleTodo: toggleTodo,
    onRemoveTodo: removeTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
