import React from "react";
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import TodoItem from './todoItem';
import { removeTodo, toggleTodo } from "../actions";

const TodoList = ({ todos, onToggleTodo, onRemoveTodo }) => {
    return (
        <ul>
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
        </ul>
    )
}

TodoList.propTypes = {
    todos: propTypes.array.isRequired
};

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
};

const mapDispatchToProps = {
    onToggleTodo: toggleTodo,
    onRemoveTodo: removeTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
