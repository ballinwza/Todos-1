import { useState, useRef } from "react" 
import {v4 as uuidv4} from 'uuid' 
import { addData } from "../connect/connect" 

export const InputTodo = ({fetchInit, url}) =>{ 
    const inputTodoAdd = useRef("")
    const [submitTodo, setSubmitTodo] = useState({id: "", title: "", completed: false }) 

    const handleAddTodo = (e) =>{ 
        setSubmitTodo({id: uuidv4, title: inputTodoAdd.current.value, completed: false }) 
        if(e.key === "Enter" && inputTodoAdd.current.value !== ""){ 
            addData(url , submitTodo) 
            inputTodoAdd.current.value = ""
            setTimeout(()=>{
                fetchInit()
            },10)
        }
    } 

    return(
        <div>
            <input ref={inputTodoAdd} type="text" onKeyUp={(e)=>handleAddTodo(e)} placeholder="Add your todo..."/>
        </div>
    )
}