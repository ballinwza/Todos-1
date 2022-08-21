import { useDispatch, useSelector } from "react-redux/es/exports" 
import { triggerDone, triggerAll, triggerUndone } from "../redux/actions/triggerAction"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useRef } from "react"

export const Fillter = () =>{
    const dispatch = useDispatch()
    const trigger = useSelector(state=>state.trigger)
    const  iconDiv = useRef(null) 
    const fillTextDiv = useRef("")

    useEffect(()=>{
        filterText(); 
        // eslint-disable-next-line
    },[trigger])
    
    const filterText = () =>{ 
        if(trigger.triggerDone === true){
            fillTextDiv.current.innerHTML = "Done"
        } 
        if(trigger.triggerUndone){
            fillTextDiv.current.innerHTML = "Undone"
        }if(trigger.triggerAll){
            fillTextDiv.current.innerHTML = "All"
        } 
    }
    return(
        <div className="fillter">
            <div>
                <p ref={fillTextDiv}>All</p>
                <p><FontAwesomeIcon icon={faAngleDown} onClick={()=> iconDiv.current.className === "visible" ? iconDiv.current.className ="" : iconDiv.current.className="visible"}/></p>
            </div>
            <ul ref={iconDiv} className="" onMouseOut={()=>iconDiv.current.className = ""} onMouseOver={()=>iconDiv.current.className = "visible"}>
                <li onClick={()=>dispatch(triggerAll(true))} onMouseOver={()=>iconDiv.current.className = "visible"}>All</li>
                <li onClick={()=>dispatch(triggerDone(true))} onMouseOver={()=>iconDiv.current.className = "visible"}>Done</li>
                <li onClick={()=>dispatch(triggerUndone(true))} onMouseOver={()=>iconDiv.current.className = "visible"}>Undone</li>
            </ul>
        </div>
    )
}