import { types } from '../actionTypes';

// for add TODO in list
export const addTodo = (todo) => (dispatch) => {
    dispatch({ type: types.ADD_TODO, todo });
};

export const removeTodo = (index) => (dispatch) => {
    dispatch({ type: types.REMOVE_TODO, index });
};

export const removeCompeleteTodo = () => (dispatch) => {
    dispatch({ type: types.REMOVE_COMPLETE_TODO });
};
