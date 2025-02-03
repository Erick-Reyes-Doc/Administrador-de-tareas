"use client"

import { useState, useCallback } from "react"
import TaskList from "./components/TaskList"
import TaskForm from "./components/TaskForm"
import Modal from "./components/Modal"
import { useTasks } from "./hooks/useTasks"
import type { Task } from "./types"
import { Plus } from "lucide-react"

export default function Home() {
  const { tasks, addTask, updateTask, deleteTask } = useTasks()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentTask, setCurrentTask] = useState<Task | null>(null)
  const [filter, setFilter] = useState("all")

  const filteredTasks = tasks.filter((task) => {
    if (filter === "pending") return !task.completed
    if (filter === "completed") return task.completed
    return true
  })

  const openModal = useCallback((task: Task | null = null) => {
    setCurrentTask(task)
    setIsModalOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setCurrentTask(null)
    setIsModalOpen(false)
  }, [])

  const handleSubmit = useCallback(
    (task: Task) => {
      if (currentTask) {
        updateTask(task)
      } else {
        addTask(task)
      }
      closeModal()
    },
    [currentTask, updateTask, addTask, closeModal],
  )

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-secondary-dark text-white p-6 shadow-lg">
        <div className="container mx-auto max-w-5xl flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-wide">Administrador de Tareas</h1>
          <select
            className="bg-secondary text-white px-4 py-2 rounded-md shadow-md border border-secondary-light focus:outline-none focus:ring-2 focus:ring-secondary-light"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">Todas</option>
            <option value="pending">Pendientes</option>
            <option value="completed">Completadas</option>
          </select>
        </div>
      </header>

      <main className="container mx-auto max-w-5xl p-6">
        <TaskList tasks={filteredTasks} onEdit={openModal} onDelete={deleteTask} onToggle={updateTask} />

        <button
          onClick={() => openModal()}
          className="fixed bottom-6 right-6 w-16 h-16 bg-secondary hover:bg-secondary-dark text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-110"
          aria-label="Agregar tarea"
        >
          <Plus size={28} />
        </button>
      </main>

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <TaskForm onSubmit={handleSubmit} initialTask={currentTask} />
        </Modal>
      )}
    </div>
  )
}
