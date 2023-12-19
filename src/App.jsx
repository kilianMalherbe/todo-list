import { useState, useRef } from "react";
import Task from "./components/Task";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [messageErreur, setMessageErreur] = useState("");

  function handleAddTask(e) {
    e.preventDefault();

    if (e.target[0].value.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
      setMessageErreur("");
    } else {
      setMessageErreur("Ajoutez d'abord du contenu à votre tâche");
    }
  }

  return (
    <>
      <h1 className="text-amber-400 font-bold font-Manrope text-4xl mb-6">
        To-Do List
      </h1>

      <div className="bg-amber-100 p-8 rounded-lg flex flex-col gap-4 min-w-[400px]">
        {tasks.length > 0 && (
          <div className="flex flex-col gap-2">
            {tasks.map((value, index) => (
              <Task
                key={index}
                index={index}
                value={value}
                tasks={tasks}
                setTasks={setTasks}
              />
            ))}
          </div>
        )}

        {tasks.length === 0 && (
          <h3 className="text-amber-600 font-Inter font-medium">
            Aucune tâche
          </h3>
        )}

        <form onSubmit={handleAddTask}>
          <label htmlFor=""></label>
          <input
            name="task"
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="w-full text-amber-600 font-Inter font-medium bg-amber-200 p-3 rounded-md outline-0"
          />
        </form>
        {messageErreur !== "" && (
          <p className="text-amber-600 font-Inter font-medium">
            {messageErreur}
          </p>
        )}
      </div>
    </>
  );
}

export default App;
