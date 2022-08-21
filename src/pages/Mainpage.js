import { TodoItem } from "../compornents/TodoItem";
import {Progressbar} from '../compornents/Progressbar';
import {useDispatch, useSelector} from 'react-redux'
import {addTodoList} from '../redux/actions/todoAction'
import {useEffect} from 'react'
import { InputTodo } from "../compornents/InputTodo";
import {getTodoListData} from "../connect/connect";
import { Fillter } from "../compornents/Fillter";
import { addDoneList } from "../redux/actions/doneAction";
import { addUndoneList } from '../redux/actions/undoneAction'

export const MainPage = () => {
    const URL = "http://localhost:3001/todos"
    const dispatch = useDispatch()
    const todos = useSelector(state=>state.todos)
    const todone = useSelector(state=>state.todone)
    const undone = useSelector(state=>state.undone)
    const trigger = useSelector(state=>state.trigger)

    /* Fetch Data */
    const initData = () =>{
      getTodoListData(URL)
      .then((data)=>{
        dispatch(addTodoList([...data]))
        console.log("get data",data)

        let doneData = data.filter((item)=> item.completed === true)
        dispatch(addDoneList([...doneData]))
        console.log("get done data",doneData)

        let undoneData = data.filter((item)=> item.completed === false)
        dispatch(addUndoneList([...undoneData]))

      })
      .catch(err=>console.log(err.message))
    }

    /* Initial State */
    useEffect(()=>{
      initData()
      console.log("effect run")
      // eslint-disable-next-line
    },[])

    /* Filter List */
    const fillterList = (todolist) =>{
      return(
        <>
          {todolist &&
              todolist.map((item) => {
                return (
                  <div key={item.id} id={item.id} className="todo">
                    <TodoItem state={item} content={item.title} url={URL} fetchInit={()=>initData()} checkStatus={item.completed}/>
                  </div>
                );
            })}
        </>
      )
    }

    const showFillterList = () =>{
      if(trigger.triggerAll){
        return fillterList(todos)
      }
      if(trigger.triggerDone){
        return fillterList(todone)
      }
      if(trigger.triggerUndone){
        return fillterList(undone)
      }
      else{
        return fillterList(todos)
      }
    }

    return (
      <div className="mainpage-container" >
        <div className="modal-container">
          <div className="progress-container">
            <Progressbar fetchInit={()=>initData()}/>
          </div>

          <div className="task-container">

            <div className="head">
              <div className="head-text">
                <h2>Tasks</h2>
              </div>
              <Fillter/>
            </div>

            {showFillterList()}

          </div>

          <InputTodo url={URL} fetchInit={()=>initData()}/>

        </div>
      </div>
    );
}