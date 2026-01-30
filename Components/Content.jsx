function Content({ input,task, deleteTask, editTask, ref,ref1}) {
  return (
    <>
      <div className="flex flex-col mt-4 gap-1">
        {task.map((value, index) => {
          return (
            <div
              className="border-2 flex gap-1  justify-between p-1"
              key={value.id}
            >
              <div>
                <p>{value.text}</p>
              </div>
              <div className="flex gap-1">
                <button ref={ref1}
                  className="bg-green-400 px-2 border-2"
                  onClick={(e) => {
                    ref.current.focus();
                    editTask(value.text,value.id);
                  }}
                >
                  Edit
                </button>
                <button
                  className="bg-green-400 px-2 border-2"
                  onClick={(e) => {
                    deleteTask(value.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Content;
