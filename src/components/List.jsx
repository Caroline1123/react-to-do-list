const List = ({tasks, onChangeStatus, onDeleteTask}) => {

    const handleStatusChange = (e) => {
        const targetIndex = parseInt(e.target.id.split("_")[1])
        onChangeStatus(targetIndex);
    }

    const handleDelete = (e) => {
        const targetIndex = parseInt(e.target.id.split("_")[1])
        onDeleteTask(targetIndex)
    }

    return (
        <div className="tasksList w-full flex flex-col justify-center items-center gap-4 p-4 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">To-Dos</h2>
            <ul className="w-full">
                {
                tasks.length == 0 ? (
                    <p className="flex items-center justify-center text-gray-500 text-s">🎉 Nothing to do! 🎉</p>
                ) : (
                
                tasks.map((task, index) => (
                    <li
                        key={index}
                        className="flex items-center p-2 mb-2 bg-white rounded-md shadow-sm hover:bg-gray-50 transition"
                    >
                        <input
                            className="mr-4"
                            type="checkbox"
                            checked={task.completed}
                            onChange={handleStatusChange}
                            id = {`item_${index}`}
                        ></input>
                        <span className={`text-lg ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                            {task.task}
                        </span>
                        <img src="./src/assets/images/delete.svg" className="w-6 ml-auto cursor-pointer" onClick={handleDelete} id = {`item_${index}`}/>
                    </li>
                ))
                )
            }
            </ul>
        </div>
    );
};




export {List}