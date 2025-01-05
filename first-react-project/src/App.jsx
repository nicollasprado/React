import { useState, useEffect } from 'react';
import Tasks from "./components/Tasks.jsx";
import AddTask from "./components/AddTask.jsx";
import Title from "./components/Title.jsx";


function App() {
    // State, renderiza a pagina sempre que algo é alterado
    const [tasks, setTasks] = useState(
        // Recupera o que está armazenado no local storage
        JSON.parse(localStorage.getItem("tasks")) || []
    );


    // Executa a função passada sempre o tasks for alterado
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks])


    /*
    Consumindo API
    -> Executada somente uma vez - por causa do [] vazio, quando o usuário acessa pela primeira vez a aplicação
    useEffect(() => {
        async function fetchTasks(){
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10',
                {
                    method: 'GET'
                }
            );
            const data = await response.json();

            setTasks(data);
        }

        fetchTasks();
    }, [])
    */


    function onTaskClick(taskId){
        const newTasks = tasks.map(task => {
            if(task.id === taskId){
                return {...task, isCompleted: !task.isCompleted};
            }

            return task;
        })

        setTasks(newTasks);
    }

    function onDeleteTaskClick(taskId){
        const updatedTasks = tasks.filter(task => task.id !== taskId);

        setTasks(updatedTasks);
    }

    function onAddTaskSubmit(title, description){
        if(!title.trim() || !description.trim()){
            return alert("Preencha o titulo e a descrição da tarefa");
        }
        const newTask = {
            id: tasks.length + 1,
            title: title,
            description: description,
            isCompleted: false,
        };

        setTasks([...tasks, newTask]);
    }

    return(
      <div className="flex justify-center w-screen h-screen p-6 bg-slate-500">
          <div className="w-[500px] space-y-4">
              <Title> Gerenciador de Tarefas </Title>
              <AddTask onAddTaskSubmit={onAddTaskSubmit} />
              <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick}/>
          </div>
      </div>
    );
}

export default App
