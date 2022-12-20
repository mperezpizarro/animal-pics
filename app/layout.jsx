import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head />
      <body className='bg-slate-100 text-gray-900 flex items-center justify-center min-h-screen'>
        {children}
      </body>
    </html>
  )
}
