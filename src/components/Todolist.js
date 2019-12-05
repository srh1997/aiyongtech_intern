import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const Todolist=({todos, onTodoClick})=>(
    <ul>
        {
            todos.map((todo,index)=>(
                <Todo key={index} {...todo} onClick={()=>onTodoClick(index)}/>
            ))
        }
    </ul>
);

export default Todolist;