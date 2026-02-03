import check from "../Img/check.png";
function Header({
  input,
  ref,
  setInput,
  addTask,
  isCompleted,
  setIsCompleted,
  saveEditedTask,
}) {
  return (
    <>
      <div className="Header flex flex-col gap-3">
        <div className="flex justify-center text-2xl text-[#E6EAF0]">
          <h1>TODO</h1>
        </div>
        <div className="flex justify-center gap-2">
          <div className=" flex border border-[#3A4456] justify-between px-1 w-4/5 h-10 bg-[#2A3342] rounded-sm">
            <input
              ref={ref}
              type="text"
              id="Task"
              placeholder="Type your to-do"
              className="outline-0 indent-0.5 p-1 w-4/5 placeholder:text-[#9AA4B2] text-[#E6EAF0] "
              onChange={(e) => {
                setInput(e.target.value);
              }}
              value={input}
            ></input>
            {!isCompleted ? (
              <div className="flex content-center flex-wrap">
                <img
                  src={check}
                  className="h-1/2"
                  onClick={() => {
                    setIsCompleted(true);
                    saveEditedTask();
                  }}
                ></img>
              </div>
            ) : null}
          </div>
          <button
            className="h-full flex self-center px-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white content-center rounded-sm "
            onClick={() => {
              if(isCompleted){
                if (input.trim() != "") {
                  addTask();
                } else {
                  alert("You can't add empty task");
                }
              }
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
