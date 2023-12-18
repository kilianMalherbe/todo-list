import './css/Task.css'
import CrossIcon from '../assets/CrossIcon.jsx'

function Task({index, value, tasks, setTasks}) {

  function handleRemoveTask() {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  }

  return (
    <>
      <div key={index} className="task">
        { value }
        <button className='removeButton' onClick={handleRemoveTask}>
          <CrossIcon />
        </button>
      </div>
    </>
  )
}

export default Task
