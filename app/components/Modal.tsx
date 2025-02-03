import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { X } from "lucide-react"
import type React from "react"

interface ModalProps {
    onClose: () => void
    children: React.ReactNode
}

export default function Modal({ onClose, children }: ModalProps) {
    const [modalRoot, setModalRoot] = useState<Element | null>(null)

    useEffect(() => {
        const root = document.createElement("div")
        document.body.appendChild(root)
        setModalRoot(root)

        return () => {
            document.body.removeChild(root)
        }
    }, [])

    if (!modalRoot) {
        return null
    }

    return createPortal(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-lg w-full max-w-md relative transition-all">
                <button
                    className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 transition-colors"
                    onClick={onClose}
                    aria-label="Cerrar modal"
                >
                    <X size={20} />
                </button>
                <div className="p-6">{children}</div>
            </div>
        </div>,
        modalRoot
    )
}
