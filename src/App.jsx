import { useState,useRef } from "react";
import "./App.css";
import Practice from "./Practice.jsx";
import Header from "../Components/Header.jsx";
import Content from "../Components/Content.jsx";

function App() {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);
  const [isCompleted,setIsCompleted]=useState(true);
  const ref=useRef(null);
  const [currentId,setCurrentId]=useState(null);
  const ref1=useRef(null);
  const resetInput=()=>{
    ref.current.value=""
    ref.current.focus();
  }
  const addTask = () => {
    setTask((task) => {
          return [...task,{id:Date.now(),text:input}]
    })
    resetInput()
  };
  const deleteTask=(taskIdToRemove)=>{
    setTask((task) => {
        return task.filter((task) => {
           return task.id !==taskIdToRemove
        })
    })
    resetInput()
  }
  const editTask=(textInTask,idInTask)=>{
      setIsCompleted(false);
      ref.current.value=textInTask;
      setCurrentId(idInTask);
  }
  const saveEditedTask=() => {
    setTask((task) => {
     return task.map((element) => {
        if(element.id===currentId){
          return {...element,text:ref.current.value}
        }
        return {...element}
    }) 
    })
  }

    return (
    <>
      <div className="h-screen bg-zinc-500 flex justify-center">
        <div className="Container flex flex-col border-4 w-3/12 h-1/2 p-2">
          <Header ref={ref}input={input} setInput={setInput} addTask={addTask} isCompleted={isCompleted} setIsCompleted={setIsCompleted} saveEditedTask={saveEditedTask}></Header>
          <Content input={input} task={task} deleteTask={deleteTask} editTask={editTask} ref={ref} ref1={ref1}></Content>
        </div>
      </div>
    </>
    );
}
export default App;
