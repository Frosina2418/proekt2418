import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav style={navStyle}>
      <h2 style={{ margin: 0 }}>🕶️ Sunglasses Shop</h2>
      <div style={linkContainer}>
        {isAuthenticated ? (
          <>
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
            <button onClick={handleLogout} style={buttonStyle}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" style={linkStyle}>Login</Link>
            <Link to="/register" style={linkStyle}>Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

// --- Styles ---
const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem 2rem",
  backgroundColor: "#333",
  color: "white"
};

const linkContainer = {
  display: "flex",
  gap: "1rem"
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold"
};

const buttonStyle = {
  background: "transparent",
  border: "1px solid white",
  color: "white",
  padding: "0.4rem 0.8rem",
  borderRadius: "5px",
  cursor: "pointer"
};
