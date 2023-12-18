import { useState, useRef } from 'react'
import Task from './components/Task'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState("")
  const [messageErreur, setMessageErreur] = useState("")

  function handleAddTask(e) {
    e.preventDefault();

    if (e.target[0].value.trim() !== "") {
      setTasks([...tasks, task]);
      setTask('');
      setMessageErreur("");
    } else {
      setMessageErreur("Ajoutez d'abord du contenu à votre tâche");
    }
  }

  return (
    <>
      <h1>To Do List</h1>

      <form onSubmit={handleAddTask}>
        <label htmlFor="">Ajouter une tâche : </label>
        <input name='task' type="text" value={task} onChange={e => setTask(e.target.value)} />
        <p className='dangerText'>{messageErreur}</p>

        <button type="submit">Ajouter</button>
      </form>

      <div className='tasks'>
        {
          tasks.map((value, index) => (
            <Task key={index} value={value} tasks={tasks} setTasks={setTasks} />
          ))
        }
      </div>

      {
        tasks.length === 0 && <h3>Pas de tâches à afficher...</h3>
      }
    </>
  )
}

export default App
