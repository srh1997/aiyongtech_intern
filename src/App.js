import React from 'react';
import AddTodo from "./containers/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";
import './App.css';
import Footer from "./containers/Footer";

const App =()=>(
       <div>
            <AddTodo/>
            <VisibleTodoList/>
            <Footer/>
      </div>
)
    //  const todoList=this.state.todoList.todo.slice().map((item,index)=>{
    //      return <div key={index}>
    //          <span>待办事项:{item.text} </span>
    //          <span>是否完成:{item.completed?'已完成':'未完成'}</span>
    //      </div>
    //  });
    // return (
    //     <div className='app'>
    //       <h1>{todoList}</h1>
    //     </div>
    // )


// let initialState={
//     todo:[
//         {
//             text:'找妈妈',
//             completed:true
//         },
//         {
//             text: '找爸爸',
//             completed: false
//         }
//     ],
//     visibilityFilter:'SHOW_ALL'
// };
//
// let store = createStore(reducer,initialState);
// function listener(){
//     console.log(store.getState());
// }
// store.subscribe(listener);
//
// store.dispatch({type:'ADD_TODO',text:'找爷爷'});
// store.dispatch({type:'TOGGLE_TODO',index:2});


export default App;
