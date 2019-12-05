import React from 'react'
import {addTodo} from "../actions/actions";
import {connect} from 'react-redux'
let input;
let AddTodo=(props)=>{
    console.log(props);
    const {dispatch}=props;
    return(
    <div>
    <form onSubmit={e=>{
        e.preventDefault();
        if(!input.value.trim()){
            return ;
        }
        dispatch(addTodo(input.value));
        input.value='';
    }}>
        <input ref={node=>{
            input=node
        }}/>
        <button type='submit'>添加</button>
    </form>
</div>)
};
const mapStateToProps=()=>{
    return {
        a:1
    }
};
AddTodo=connect(mapStateToProps)(AddTodo);
export default AddTodo;