import {combineReducers} from 'redux'
import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    VisibilityFilters
} from '../actions/actions'
const {SHOW_ALL}=VisibilityFilters;


// reducer
function visibilityFilter(state = SHOW_ALL,action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

function todos(state = [],action) {
    switch (action.type) {
        case ADD_TODO:
            return state.concat([{text:action.text,completed:false}]);
        case TOGGLE_TODO:
            let newState=state.slice();
            newState[action.index].completed=!newState[action.index].completed;
            return newState;
        default:
            return state;
    }
}

// function todoApp(state = initialState,action) {
//     return {
//         visibilityFilter:visibilityFilter(state.visibilityFilter,action),
//         todo:todo(state.todo,action)
//     }
// }
const todoApp=combineReducers({
    visibilityFilter,
    todos
});

export default todoApp;