import React, { useState } from 'react';

import './NewTodo.css'
const NewTodo = (props) => {

    const[todo, setTodo] = useState({title:'',desc:''})
    const{title,desc} = todo;
    const handleChange = (event) => {
        const name = event.target.name;
        setTodo((oldTodo) => {
            return {...oldTodo, [name]: event.target.value}
        });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setTodo({title: '', desc: ''});
        props.addTodo(todo)
    }

    return (
        <div className='newTodoContainer'>
            <form onSubmit={handleSubmit}>
                <div className='newTodo'>
                    <label htmlFor="title" >Title : </label>
                    <input type="text" name='title' id='title' onChange={handleChange} value={title}/>
                </div>
                
                <div className='newTodo'>
                    <label htmlFor="desc" >Desc : </label>
                    <textarea name="desc" id="desc" onChange={handleChange} value={desc}></textarea>
                </div>
                <button type='submit' >Add Todo</button>
            </form>
        </div>
    );
};

export default NewTodo;