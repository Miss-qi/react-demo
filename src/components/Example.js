import React, { useState, useEffect, useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
    console.log('state', state, action);
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count -1 };
        case 'reset':
            return init(action.payload);
        default:
            throw new Error();
    }
}

function init(initialCount) {
    return { count: initialCount };
}

export function Counter({initialCount}) {
    const [state, dispatch] = useReducer(reducer, initialCount, init);
    return (
        <div>
            Count: {state.count}
            <button onClick={() => dispatch({type: 'reset', payload: initialCount})}>Reset</button>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        </div>
    )

}
function example() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}

export default example;
