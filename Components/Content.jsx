import bin from "../Img/bin.png"
import edit from "../Img/edit.png"
function Content({task}) {
  return (
  <>
    <div className="flex flex-col">
        {task.map((value,index) => {
             return <div key={value.id}>{value.text}</div>
        })}
    </div>
  </>
  );
}
export default Content;