function Content({ task, deleteTask, editTask, ref }) {
  return (
    <>
      <div className="flex flex-col mt-4 gap-1 overflow-auto h-96">
        {task.map((value) => {
          return (
            <div
              className="flex gap-1 justify-between p-2 bg-[#263041] border border-[#3A4456] rounded-md"
              key={value.id}
            >
              <div className="flex content-center gap-2 self-center">
                <div className="flex content-center flex-start">
                  <input type="checkbox" className="h-full accent-[#3B82F6] scale-125"></input>
                </div>
                <div>
                <div className="text-[#D1D5DB] text-sm flex wrap-anywhere">{value.text}</div>
                </div>
              </div>
              <div className="flex gap-1">
                <button
                  className="bg-[#22C55E] hover:bg-[#16A34A] text-white px-2 rounded-sm h-8 text-sm font-medium sm:text-base"
                  onClick={(e) => {
                    ref.current.focus();
                    editTask(value.text, value.id);
                  }}
                >
                  Edit
                </button>
                <button
                  className="bg-[#EF4444] hover:bg-[#DC2626] text-white px-2 rounded-sm h-8 text-sm font-medium sm:text-base"
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
