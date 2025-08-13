import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <header className="navbar">
        <div className="container">
          <div className="brand">Greenfield School</div>
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/login" className="login-link">Login</Link>
          </nav>
        </div>
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer className="footer">
        <div className="container">© {new Date().getFullYear()} Greenfield School</div>
      </footer>
    </>
  )
}

export default App
