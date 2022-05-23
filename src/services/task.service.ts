import { api } from "./api";

export async function getTasks() {
  return await api.get("/tasks");
}
export async function createTask(title: string) {
  return await api.post("/tasks", { title });
}
export async function deleteTask(id: number) {
  return await api.delete(`/tasks/${id}`);
}
