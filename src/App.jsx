import {useState, useEffect} from "react"

import {Title} from "./components/Title"
import {AddTask} from "./components/Form"
import {List} from "./components/List"

import './App.css'

const App = () =>  {
  const [tasks, setTasks] = useState([]);

  useEffect(()=> {
    const storedTasks = localStorage.getItem('tasks') || [];
    if (storedTasks) {
      const taskArray = JSON.parse(storedTasks);
      setTasks(taskArray);
    }
    }, [])

    
  const addTask = (task) => {
    task = {
      task: task,
      completed : false,
    }
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks)
    localStorage.setItem("tasks", JSON.stringify(updatedTasks) )
  }

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index)
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  const changeTaskStatus = (index) => {
    const updatedTasks = tasks.map((task,i) => i === index? {...task, completed: !task.completed}: task)
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  return (
    <main className="flex flex-col items-center gap-6">
      <Title />
      <AddTask onAddTask = {addTask}/>
      <List tasks={tasks} onChangeStatus = {changeTaskStatus} onDeleteTask = {deleteTask} />
    </main>
  )
}

export default App
