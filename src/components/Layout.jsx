import { Outlet, Link } from "react-router-dom"

export default function Layout() {
  return (
    <div className="container">
        <div className="min-h-screen flex flex-col md:flex-row bg-gray-100 text-gray-900">
        
        <aside className="hidden md:block w-60 bg-white shadow-lg p-6">
            <h2 className="font-bold text-lg mb-6">Weather Dashboard</h2>
            <nav className="space-y-2">
            <Link to="/" className="block text-blue-600 hover:underline">Home</Link>
            </nav>
        </aside>

        <main className="flex-1 p-6">
            <div className="max-w-7xl mx-auto">
            <Outlet />
            </div>
        </main>
        </div>
    </div>
  )
}
