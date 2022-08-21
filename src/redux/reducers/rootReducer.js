import { combineReducers } from 'redux'
import {todoReducer} from './todoReducer'
import { doneReducer } from './doneReducer'
import { triggerReducer } from './triggerReducer'
import { undoneReducer } from './undoneReducer'

export const rootReducer = combineReducers({
    todos: todoReducer,
    todone: doneReducer,
    undone: undoneReducer,
    trigger: triggerReducer,
})