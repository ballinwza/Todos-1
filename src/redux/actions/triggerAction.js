import { TRIGGER_DONE, TRIGGER_ALL, TRIGGER_UNDONE } from "../reducers/triggerReducer"

export const triggerDone = (bool) =>{
    return{
        type: TRIGGER_DONE,
        payload : bool
    }
}

export const triggerAll = (bool) =>{
    return{
        type: TRIGGER_ALL,
        payload : bool
    }
}

export const triggerUndone = (bool) =>{
    return{
        type: TRIGGER_UNDONE,
        payload : bool
    }
}