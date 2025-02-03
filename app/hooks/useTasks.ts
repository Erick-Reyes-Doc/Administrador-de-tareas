import { useEffect, useReducer } from "react"
import type { Task } from "../types"
import { getStoredTasks, setStoredTasks } from "../utils/localStorage"

type Action =
    | { type: "SET_TASKS"; payload: Task[] }
    | { type: "ADD_TASK"; payload: Task }
    | { type: "UPDATE_TASK"; payload: Task }
    | { type: "DELETE_TASK"; payload: string }

function tasksReducer(state: Task[], action: Action): Task[] {
    switch (action.type) {
        case "SET_TASKS":
            return action.payload
        case "ADD_TASK":
            return [...state, action.payload]
        case "UPDATE_TASK":
            return state.map((task) => (task.id === action.payload.id ? action.payload : task))
        case "DELETE_TASK":
            return state.filter((task) => task.id !== action.payload)
        default:
            return state
    }
}

export function useTasks() {
    const [tasks, dispatch] = useReducer(tasksReducer, [])

    useEffect(() => {
        const storedTasks = getStoredTasks()
        dispatch({ type: "SET_TASKS", payload: storedTasks })
    }, [])

    useEffect(() => {
        setStoredTasks(tasks)
    }, [tasks])

    const addTask = (task: Task) => {
        dispatch({ type: "ADD_TASK", payload: task })
    }

    const updateTask = (task: Task) => {
        dispatch({ type: "UPDATE_TASK", payload: task })
    }

    const deleteTask = (id: string) => {
        dispatch({ type: "DELETE_TASK", payload: id })
    }

    return { tasks, addTask, updateTask, deleteTask }
}

