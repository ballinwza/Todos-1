export const TRIGGER_DONE = "TRIGGER_DONE"
export const TRIGGER_UNDONE = "TRIGGER_UNDONE"
export const TRIGGER_ALL = "TRIGGER_ALL"

const initialState = {
    triggerDone: false,
    triggerUndone: false,
    triggerAll: false,
}
export const triggerReducer = (state=initialState,action) =>{
    switch(action.type){
        case TRIGGER_DONE:
            return {
                triggerAll: false,
                triggerDone: action.payload,
                triggerUndone: false
            }
        case TRIGGER_UNDONE:
            return{
                triggerAll: false,
                triggerDone: false,
                triggerUndone: action.payload 
            }
        case TRIGGER_ALL:
            return{
                triggerAll: action.payload,
                triggerDone: false,
                triggerUndone: false 
            }
        default:
            return state
    }
}