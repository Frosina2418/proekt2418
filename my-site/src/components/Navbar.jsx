import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#333', color: '#fff' }}>
      <Link to="/" style={{ marginRight: '1rem', color: '#fff' }}>Home</Link>
      <Link to="/login" style={{ marginRight: '1rem', color: '#fff' }}>Login</Link>
      <Link to="/register" style={{ color: '#fff' }}>Register</Link>
    </nav>
  )
}

export default Navbar
