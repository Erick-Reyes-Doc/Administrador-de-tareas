import './globals.css'

export const metadata = {
  title: 'Administrador de Tareas',
  description: 'Una aplicación para gestionar tus tareas diarias',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}