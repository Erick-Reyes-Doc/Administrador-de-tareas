import type { Task } from "../types"
import { Check, Edit2, Trash2 } from "lucide-react"

interface TaskListProps {
    tasks: Task[]
    onEdit: (task: Task) => void
    onDelete: (id: string) => void
    onToggle: (task: Task) => void
}

export default function TaskList({ tasks, onEdit, onDelete, onToggle }: TaskListProps) {
    const getCardColor = (completed: boolean) => {
        return completed ? "bg-primary-light" : "bg-white"
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tasks.map((task) => (
                <div
                    key={task.id}
                    className={`${getCardColor(task.completed)} rounded-2xl shadow-lg p-4 transition-all duration-200 hover:shadow-xl`}
                >
                    <div className="flex items-start justify-between">
                        <div className="flex-1">
                            <h3 className={`font-medium ${task.completed ? "line-through text-gray-500" : "text-text-dark"}`}>
                                {task.name}
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">{task.description}</p>
                        </div>
                        <div className="flex space-x-2">
                            <button
                                onClick={() => onToggle({ ...task, completed: !task.completed })}
                                className={`p-2 rounded-full transition-all duration-200 ${
                                    task.completed
                                        ? "bg-green-100 text-green-600 hover:bg-green-200"
                                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                }`}
                                aria-label={task.completed ? "Marcar como pendiente" : "Marcar como completada"}
                            >
                                <Check size={16} />
                            </button>
                            <button
                                onClick={() => onEdit(task)}
                                className="p-2 rounded-full bg-secondary-light text-secondary hover:bg-secondary-dark hover:text-white transition-all duration-200"
                                aria-label="Editar tarea"
                            >
                                <Edit2 size={16} />
                            </button>
                            <button
                                onClick={() => onDelete(task.id)}
                                className="p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-all duration-200"
                                aria-label="Eliminar tarea"
                            >
                                <Trash2 size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
