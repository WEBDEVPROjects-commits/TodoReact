function Content({ task,deleteTask}) {
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
                <button className="bg-green-400 px-2 border-2 ">Edit</button>
                <button className="bg-green-400 px-2 border-2 "  onClick={(e) => {
                  deleteTask(value.id)
                }}>Delete </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Content;
