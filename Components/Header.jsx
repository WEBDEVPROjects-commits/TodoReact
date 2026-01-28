function Header({input,setInput,addTask}) {
  return (
    <>
      <div className="Header flex flex-col gap-3">
        <div className="flex justify-center text-2xl">
          <h1>TODO</h1>
        </div>
        <div className="flex justify-center gap-2">
          <input
            type="text"
            id="Task"
            placeholder="Type your to-do"
            className="border-2 outline-0 indent-0.5 p-1 w-3/5"
            onChange={(e) => {
              setInput(e.target.value)
            }}
          ></input>
          <button
            className="border-2 h-9/12 flex self-center px-2 bg-green-400 content-center"
            onClick={() => {
                addTask();
            }}>
            Add
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
