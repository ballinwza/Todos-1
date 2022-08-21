
export const ADD_TODO = "ADD_TODO" 
export const CHECK_TODO = "CHECK_TODO"

const initialState = [
    { 
      "id": "",
      "title": "",
      "completed": false
    }
]

export const todoReducer = (state=initialState, action) => { 

    switch(action.type){
        case ADD_TODO:
            return action.payload
        case CHECK_TODO :
            return [{
                ...state,
                completed: action.payload
            }]
        default:
            return state
    }
}