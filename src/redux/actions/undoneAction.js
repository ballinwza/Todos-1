import { TODO_UNDONE } from "../reducers/undoneReducer"; 

export const addUndoneList = (data) =>{
    return {
        type: TODO_UNDONE,
        payload: data
    }
}

