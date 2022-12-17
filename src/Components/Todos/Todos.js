import React from 'react';
import Todo from '../Todo/Todo';
import './Todos.css';
const Todos = (props) => {
    return (
        <div className='todosContainer'>
            {
                props.todo.map(todo => <Todo key={todo.id} todo={todo} removeTodo={props.removeTodo} />)
            }
        </div>
    );
};

export default Todos;