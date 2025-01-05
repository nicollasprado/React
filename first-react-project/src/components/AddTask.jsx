import { useState } from "react";
import Input from "./Input.jsx";

function AddTask({ onAddTaskSubmit }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return(
      <div className="flex flex-col p-6 shadow space-y-4 bg-slate-200 rounded-md">
          <Input
              type="text"
              placeholder="Digite o título da tarefa"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
          />
          <Input
              type="text"
              placeholder="Digite a descrição da tarefa"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
          />
          <button
              onClick={() => {
                  onAddTaskSubmit(title, description);
                  setTitle("");
                  setDescription("");
                  }
              }
              className="px-4 py-2 text-white bg-slate-500 rounded-md">
              Adicionar
          </button>
      </div>
    )
}

export default AddTask
