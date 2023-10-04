import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function Navbar () {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.clear()
    navigate('/login')
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-4">
      <div className="container-fluid">
        <Link className="navbar-brand ms-2" to="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1200px-H%26M-Logo.svg.png" alt="" style={{width : 40}}/>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category">Categories</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Register Admin</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login" onClick={handleLogout}>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}



