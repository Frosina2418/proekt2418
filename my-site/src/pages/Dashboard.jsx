import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import "./Dashboard.css";

function Dashboard() {
  const { user } = useAuth(); // Претпоставуваме дека има AuthContext
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/sunglasses")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error loading sunglasses:", err));
  }, []);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">
        Welcome, {user?.email || "User"} 👋
      </h1>
      <div className="dashboard-grid">
        {products.map((item) => (
          <div key={item.id} className="dashboard-card">
            <img src={item.image} alt={item.name} className="dashboard-img" />
            <h3>{item.name}</h3>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
