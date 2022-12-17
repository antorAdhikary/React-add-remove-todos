import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import NewTodo from '../NewTodo/NewTodo';
import Todos from '../Todos/Todos';
import './Home.css';
// const todo = [
//     {
//         id : '1',
//         title: 'Home',
//         desc: 'This is home'
//     },
//     {
//         id : '2',
//         title: 'Home',
//         desc: 'This is home'
//     },
// ];

const Home = () => {
    const [todos, setTodos] = useState([]);
    const handleAddTodo = (commingTodo) => {
        setTodos((prevTodo) => {
            return [...prevTodo, {commingTodo, id : uuidv4()}]
        })
    }
    const handleRemoveTodo = (id) => {
        setTodos((oldTodo) => {
            const filteredTodo = oldTodo.filter(todo => todo.id !== id);
            return filteredTodo
        })
    }
    return (
        <div className='container'>
            <h2>Add and Remove Todo</h2>
            <NewTodo addTodo={handleAddTodo}/>
            <Todos todo={todos} removeTodo={handleRemoveTodo}/>
        </div>
    );
};

export default Home;