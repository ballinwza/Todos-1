import { ADD_TODO } from "../reducers/todoReducer"; 
import { CHECK_TODO } from "../reducers/todoReducer";

export const addTodoList = (data) =>{
    return{
        type: ADD_TODO,
        payload: data
    }
} 

export const checkTodoList = (bool) =>{
    return{
        type: CHECK_TODO,
        payload: bool
    }
}

