import { useSelector } from "react-redux"
import { useEffect, useRef, useState } from "react"


export const Progressbar = ({fetchInit}) =>{ 
    const [p, setP] = useState(0) 
    const todos = useSelector(state=>state.todos)
    const countTodo = useRef(0)
    const progress = todos.map(item=>item.completed === true ? 1 : 0) 

    const calProgress = () =>{ 
      if(progress !== 0){
        let getPercent = (100/progress.length) 
        let totalPercent = progress.map((item)=>item === 0? 0 : getPercent)
        if(totalPercent.length !== 0){
          let sum = totalPercent.reduce((total, val)=>{return total + val}) 
          setP(parseInt(sum))
        }else{ 
          setP(parseInt(0))
        } 
      }
    }

    const counting = () =>{
      let sum = progress.reduce((total, val)=>{return total + val}) 
      countTodo.current = sum
    }

    useEffect(()=>{
      calProgress() 
      counting()
      console.log("Todo is complete", p , "%")
      // eslint-disable-next-line 
    },[todos]) 

    return( 
      <>
        <h1>Progress</h1>
        <div className="progressbar"> 
            <div className="color" style={{width: `${p}%`}}></div> 
        </div> 
        <p>{countTodo.current} completed</p>
      </>
        
    )
}