import React from 'react'
import {createStore} from 'redux'
import reducer from '../reducers/reducer'

let initialState={
    todo:[
        {
            text:'找妈妈',
            completed:true
        },
        {
            text: '找爸爸',
            completed: false
        }
    ],
    visibilityFilter:'SHOW_ALL'
};

let store = createStore(reducer,initialState);

console.log(store.getState());

export default store;