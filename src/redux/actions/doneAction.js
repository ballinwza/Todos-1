import { TODO_DONE } from "../reducers/doneReducer"; 

export const addDoneList = (data) =>{
    return {
        type: TODO_DONE,
        payload: data
    }
}

