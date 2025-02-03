import { useState, useEffect } from "react"
import type { Task } from "../types"

interface TaskFormProps {
    onSubmit: (task: Task) => void
    initialTask: Task | null
}

export default function TaskForm({ onSubmit, initialTask }: TaskFormProps) {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [error, setError] = useState("")

    useEffect(() => {
        if (initialTask) {
            setName(initialTask.name)
            setDescription(initialTask.description)
        } else {
            setName("")
            setDescription("")
        }
    }, [initialTask])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!name.trim()) {
            setError("El nombre de la tarea es requerido")
            return
        }
        setError("")
        onSubmit({
            id: initialTask?.id || Date.now().toString(),
            name,
            description,
            completed: initialTask?.completed || false,
        })
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary mb-4">{initialTask ? "Editar Tarea" : "Nueva Tarea"}</h2>
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-dark mb-1">
                    Nombre de la tarea
                </label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Ingresa el nombre de la tarea"
                />
            </div>
            <div>
                <label htmlFor="description" className="block text-sm font-medium text-text-dark mb-1">
                    Descripción
                </label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    rows={3}
                    placeholder="Ingresa una descripción (opcional)"
                ></textarea>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
                type="submit"
                className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors duration-200"
            >
                {initialTask ? "Actualizar" : "Crear"}
            </button>
        </form>
    )
}
