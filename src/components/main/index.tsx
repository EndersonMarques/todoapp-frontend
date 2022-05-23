import axios from "axios";
import { useEffect, useState } from "react";
import { createTask, deleteTask, getTasks } from "../../services/task.service";
import Task, { TaskProp } from "../task";

export default function MainTodoApp() {
  const [tasks, setTasks] = useState<TaskProp[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  useEffect(() => {
    getTasks().then((resposta) => {
      setTasks(resposta.data);
    });
  }, []);

  async function getAllTasks() {
    getTasks().then((resposta) => {
      setTasks(resposta.data);
    });
  }

  async function createNewTask() {
    await createTask(newTask);
    setNewTask("");
    await getAllTasks();
  }
  async function removeTask(id: number) {
    await deleteTask(id);
    await getAllTasks();
  }

  return (
    <div className="flex h-screen justify-center items-center bg-gray-800">
      <div className="bg-slate-900 w-10/12 md:8/12 lg:w-6/12 rounded-xl p-20 text-neutral-50">
        <div className="font-display text-4xl font-bold text-center">
          TodoApp
        </div>
        <div className="flex  max-h-96 overflow-x-auto justify-center flex-col tasks mt-5 text-lg">
          {tasks.length <= 0 && <div>Nao tem Tasks :/</div>}

          {tasks?.map((task, key) => {
            return (
              <Task
                key={key}
                title={task.title}
                handleClick={() => {
                  removeTask(Number(task.id));
                }}
              />
            );
          })}
        </div>
        <div className="w-full text-center">
          <input
            type="text"
            value={newTask}
            className="p-3 mx-2 border-2 border-slate-400 rounded-lg text-black"
            onChange={(evento) => setNewTask(evento.target.value)}
          />
          <button
            onClick={createNewTask}
            className="bg-slate-700 hover:bg-slate-200 font-bold  hover:text-slate-900     mt-5 w-56  p-3 rounded-lg"
          >
            Criar
          </button>
        </div>
      </div>
    </div>
  );
}
