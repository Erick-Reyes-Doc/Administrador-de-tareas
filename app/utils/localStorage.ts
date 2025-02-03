import type { Task } from "../types"

const STORAGE_KEY = "tasks"

export function getStoredTasks(): Task[] {
    if (typeof window === "undefined") {
        return []
    }
    const storedTasks = localStorage.getItem(STORAGE_KEY)
    return storedTasks ? JSON.parse(storedTasks) : []
}

export function setStoredTasks(tasks: Task[]): void {
    if (typeof window === "undefined") {
        return
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
}

