import check from "../Img/check.png";
function Header({ ref, input,setInput, addTask,isCompleted,setIsCompleted,saveEditedTask}) {
  return (
    <>
      <div className="Header flex flex-col gap-3">
        <div className="flex justify-center text-2xl">
          <h1>TODO</h1>
        </div>
        <div className="flex justify-center gap-2">
          <div className=" flex border-2 justify-between px-1 w-4/5 h-10">
            <input
              ref={ref}
              type="text"
              id="Task"
              placeholder="Type your to-do"
              className="outline-0 indent-0.5 p-1 w-4/5"
              onChange={(e) => {
                setInput(e.target.value);
              }}
            ></input>
            {!isCompleted? <div className="flex content-center flex-wrap">
                <img src={check} className="h-1/2" onClick={() => {
                  setIsCompleted(true)
                  // ref.current.value
                  saveEditedTask()
                }
                }></img>
              </div>:<div></div>}
          </div>
          <button
            className="border-2 h-9/12 flex self-center px-2 bg-green-400 content-center"
            onClick={() => {
              addTask();
            }}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
}
export default Header;
