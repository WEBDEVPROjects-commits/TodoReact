import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Practice from "./Practice.jsx";
import Header from "../Components/Header.jsx";
import Content from "../Components/Content.jsx";


function App() {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);
  const addTask = () => {
    setTask((task) => {
          return [...task,{id:Date.now(),text:input}]
    })
  };
  return (
    <>
      <div className="h-screen bg-zinc-500 flex justify-center">
        <div className="Container flex flex-col border-4 w-3/12 h-1/2 p-2">
          <Header input={input} setInput={setInput} addTask={addTask}></Header>
          <Content task={task}></Content>
        </div>
      </div>
    </>
  );
}
export default App;
