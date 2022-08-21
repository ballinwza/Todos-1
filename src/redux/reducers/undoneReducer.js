 
export const TODO_UNDONE = "TODO_UNDONE"


const initialState=[] 

export const undoneReducer = (state=initialState, action) =>{
    switch(action.type){
        case TODO_UNDONE:
            return action.payload
        default:
            return state;
    }
} 