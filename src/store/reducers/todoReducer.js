import { types } from '../actionTypes'


// initeat State
let initialState = {
    todo: [],
};



function todoReducer(todos = initialState, action) {
    switch (action.type) {
        case types.ADD_TODO:
            // add new todo in existing todo array
            const addTodo = todos.todo.slice(0)
            addTodo.push(action.todo)
            return { ...todos, todo: addTodo };

        case types.REMOVE_TODO:
            // add remove todo in existing todo array
            const removeTodo = todos.todo.slice(0)
            removeTodo.splice(action.index, 1)
            return { ...todos, todo: removeTodo };

        case types.REMOVE_COMPLETE_TODO:
            return { ...todos, todo: [] };
        default:
            return todos;
    }
}

export default todoReducer;