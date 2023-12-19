import CrossIcon from "../assets/CrossIcon.jsx";

function Task({ index, value, tasks, setTasks }) {
  function handleRemoveTask() {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  }

  return (
    <>
      <div
        key={index}
        className="relative flex justify-between items-center pl-4 pr-2 pt-2 pb-2 bg-amber-200 rounded-md"
      >
        <p className="text-amber-600 font-Inter font-medium">{value}</p>
        <button
          className="absolute -right-2 -top-2 bg-amber-400 p-2 rounded-md"
          onClick={handleRemoveTask}
        >
          <CrossIcon className="fill-amber-500 w-3 h-3" />
        </button>
      </div>
    </>
  );
}

export default Task;
