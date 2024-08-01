import {useState} from "react"

const AddTask = ({onAddTask}) => {
    const [task, setTask] = useState('');

    const handleInputChange = (e) => {
        setTask(e.target.value);
      };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            onAddTask(task);
            setTask('');
        }
    };
    return (
        <form onSubmit={handleSubmit} className="flex content-center gap-4 pb-4 border-b border-gray-200 w-full">
            <input 
                type="text" 
                name="task" 
                className="w-8/12 px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Task Name" 
                value={task} 
                onChange={handleInputChange}>
            </input>
            <button type="submit" className="w-4/12">Add Task</button>
        </form>
    )
}


export {AddTask}