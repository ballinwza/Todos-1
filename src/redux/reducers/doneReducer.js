
export const TODO_DONE = "TODO_DONE"


const initialState=[] 

export const doneReducer = (state=initialState, action) =>{
    switch(action.type){
        case TODO_DONE:
            return action.payload
        default:
            return state;
    }
} 