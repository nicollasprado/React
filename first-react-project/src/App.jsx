import { useState } from 'react';
import Tasks from "./components/Tasks.jsx";
import AddTask from "./components/AddTask.jsx";


function App() {
    const [msg, setMsg] = useState("Clique no botão");

    return(
      <div>
          <h1>{msg}</h1>
          <h1 className="text-red-500">Gerenciador de Tarefas</h1>
          <button onClick={() => {setMsg("Botao clicado");}}>Mudar msg</button>
          <Tasks />
          <AddTask />
      </div>
    );
}

export default App
