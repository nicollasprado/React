import { ChevronRightIcon, Trash } from "lucide-react";
import { useNavigate } from "react-router"


function Tasks({tasks, onTaskClick, onDeleteTaskClick}) {
    const navigate = useNavigate();

    function onSeeDetailsClick(task){
        const query = new URLSearchParams();
        query.set("title", task.title);
        query.set("description", task.description);
        navigate(`/task?${query.toString()}`);
    }

    return(
      <ul className="p-6 shadow space-y-4 bg-slate-200 rounded-md">
        {tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
              <button
                  onClick={() => onTaskClick(task.id)}
                  className={`w-full p-2 text-left text-white bg-slate-400 rounded-md ${task.isCompleted && 'line-through italic'}`}>
                {task.title}
              </button>
              <button
                  onClick={() => onSeeDetailsClick(task)}
                  className="p-2 text-white bg-slate-400 rounded-md">
                <ChevronRightIcon />
              </button>
              <button onClick = {() => onDeleteTaskClick(task.id)} className="p-2 text-white bg-red-500 rounded-md">
                  <Trash />
              </button>
          </li>
        ))}
      </ul>
    );
}

export default Tasks;
