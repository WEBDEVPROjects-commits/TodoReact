import { useState,useRef,useEffect} from "react";
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

  useEffect(() => {
      const todos=JSON.parse(localStorage.getItem("todos"))
      if(todos &&todos.length>0){
        setTask(todos);
      }
  },[])
  useEffect(() => {
      localStorage.setItem("todos",JSON.stringify(task));
  },[task])

  const resetInput=()=>{
    setInput("");
    ref.current.focus();
  }
  const addTask = () => {
    setTask((task) => {
          return [...task,{id:Date.now(),text:input}]
    })
    resetInput();
  };
  const deleteTask=(taskIdToRemove)=>{
    setTask((task) => {
        return task.filter((task) => {
           return task.id !==taskIdToRemove
        })
    })
    setIsCompleted(true);
    resetInput()
  }
  const editTask=(textInTask,idInTask)=>{
      setIsCompleted(false);
      setInput(textInTask)
      setCurrentId(idInTask);
  }
  const saveEditedTask=() => {
    setTask((task) => {
     return task.map((element) => {
       if(element.id===currentId && input.trim()!==""){
         return {...element,text:input}
        }
        return {...element}
      }) 
    })
    resetInput()
  }
  
    return (
    <>
      <div className="h-screen bg-[#1E2530] bg-linear-to-br from-[#2C3440] to-[#1E2530] flex justify-center p-4 ">
        <div className="Container flex flex-col w-md min-h-1/2 self-start p-2 bg-[#202733] border border-[#2A3342] shadow-xl rounded-xl font-serif">
          <Header input={input}ref={ref} setInput={setInput} addTask={addTask} isCompleted={isCompleted} setIsCompleted={setIsCompleted} saveEditedTask={saveEditedTask}></Header>
          <Content task={task} deleteTask={deleteTask} editTask={editTask} ref={ref}></Content>
        </div>
      </div>
    </>
    );
}
export default App;
