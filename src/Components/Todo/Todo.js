import React from 'react';

import './Todo.css';

const Todo = (props) => {
    const { title, desc} = props.todo.commingTodo;
    const {id} = props.todo;
    const handleClickBtn = (id) => {
        props.removeTodo(id)
    }
    return (
        <div className='todoContainer'>
            <div className=''>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
            <button className='todoBtn' onClick={() => handleClickBtn(id)}>-</button>
        </div>
    );
};

export default Todo;