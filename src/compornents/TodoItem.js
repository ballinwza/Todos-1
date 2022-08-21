import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEllipsis} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef, useState } from 'react' 
import { updateData,deleteData } from '../connect/connect'

export const TodoItem = ({state, content,key , url, fetchInit, checkStatus}) =>{

    // Ref
    const inputEditor = useRef("") 
    const depsCheck = useRef(false) 

    //  state
    const [checker, setChecker] = useState(checkStatus)
    const [editor, setEditor] = useState(false)
    const [initContent, setInitContent] = useState(content)
    const [showEditor, setshowEditor] = useState("")
    const [showBtn, setShowBtn] = useState("") 
    const [displayItem, setDisplayItem] = useState("")

    // handle fucntion
    const handleDeleteTodo = () =>{
        deleteData(url, state.id)
        setTimeout(()=>{
            fetchInit()
            setShowBtn("")
        },10)
    }
    
    const handleEditTodo = (e) =>{
        if(e.key === "Enter" && inputEditor.current.value !== ""){
            setEditor(true)
            setInitContent(inputEditor.current.value ) 
            setDisplayItem("")
        }
        if(e.key === "Enter"){
            setshowEditor("")
            setDisplayItem("")
        }
    }

    const handleClickEdit = (e) =>{
        if(inputEditor.current.value !== ""){
            setEditor(true)
            setInitContent(inputEditor.current.value ) 
            setDisplayItem("")
            setshowEditor("")
        }else{
            setshowEditor("")
            setDisplayItem("")
        }
    }

    const handleCheckTodo = (e) =>{
        depsCheck.current = true
        if(checker){
            setChecker(false)
        }
        else{
            setChecker(true)
        }
    }

    const toggleshowEditor = () =>{ 
        if(showEditor === "visible-editor"){
            setshowEditor("")
            setShowBtn("") 
            setDisplayItem("")
        }else{
            setshowEditor("visible-editor") 
            setShowBtn("") 
            setDisplayItem("hidden-todo-item")
        } 
        setTimeout(()=>{
            inputEditor.current.focus();
        },20)
    }

    const toggleShowBtn = () =>{
        if(showBtn === "visible-btn" ){
            setShowBtn("")
        }else{
            setShowBtn("visible-btn")
        }
    }

    // render
    useEffect(()=>{
        if(depsCheck.current === true ){
            updateData({...state, completed: checker}, url, state.id)
            setTimeout(()=>{
                fetchInit() 
            },10) 
        }
        // eslint-disable-next-line
    },[checker])

    useEffect(()=>{
        if(editor===true && inputEditor.current.value !== ""){
            updateData({title: inputEditor.current.value, completed: checker}, url, state.id)
            setTimeout(()=>{
                fetchInit()
                inputEditor.current.value="" 
                setEditor(false) 
            },10) 
        } 
        // eslint-disable-next-line
    },[editor]) 

    return(
        <>
            <div className={`todo-item ${displayItem}`}>
                <div className="input-container">
                    <label >
                        <input type="checkbox" checked={checker} onChange={(e)=>handleCheckTodo(e)}/>
                        <span className="checkmark"></span>
                    </label>
                </div>
            </div>
            <div className={`todo-item ${displayItem}`}>
                <p className={checker? "checked":""}>{initContent}</p>
            </div>
            <div className={`todo-item ${displayItem}`}>
                <FontAwesomeIcon icon={faEllipsis} onClick={()=>toggleShowBtn()}/>
                
                <div className={`todo-item-list ${showBtn}`} onMouseOut={()=>setShowBtn("")} onMouseOver={()=>setShowBtn("visible-btn")}>
                    <p onClick={()=>toggleshowEditor()} onMouseOver={()=>setShowBtn("visible-btn")}>Edit</p>
                    <p onClick={()=>handleDeleteTodo()} onMouseOver={()=>setShowBtn("visible-btn")}>Delete</p> 
                </div>
            </div>
            <div className={`todo-group ${showEditor}`}>
                <input ref={inputEditor} onKeyUp={(e)=>handleEditTodo(e)} placeholder="Pree Enter to submit or close"/>
                <div className='save' onClick={(e)=>handleClickEdit(e)}><p>Save</p></div>
            </div>
        </>
    )
}