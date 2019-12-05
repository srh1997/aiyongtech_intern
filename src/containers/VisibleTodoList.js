import React from 'react'
import {toggleTodo} from "../actions/actions"
import {connect} from 'react-redux'
import Todolist from "../components/Todolist"

const getVisibleTodos=(todos,visibilityFilter)=>{
    switch (visibilityFilter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(i=>i.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(i=>!i.completed);
        default:
            return todos;
    }
};

const mapStateToProps = state => {
    return {
        todos:getVisibleTodos(state.todos,state.visibilityFilter)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick:(id)=>{dispatch(toggleTodo(id))}
    }
};

const VisibleTodoList=connect(mapStateToProps,mapDispatchToProps)(Todolist);

export default VisibleTodoList;