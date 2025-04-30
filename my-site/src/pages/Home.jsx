import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [sunglasses, setSunglasses] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/sunglasses")
      .then(res => setSunglasses(res.data))
      .catch(err => console.error("Error fetching sunglasses:", err));
  }, []);

  return (
    <div style={styles.container}>
      <h1>Available Sunglasses</h1>
      <div style={styles.grid}>
        {sunglasses.map(item => (
          <div key={item.id} style={styles.card}>
            <img src={item.image} alt={item.name} style={styles.image} />
            <h3>{item.name}</h3>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

// --- Styles ---
const styles = {
  container: {
    padding: "2rem",
    textAlign: "center"
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "2rem",
    justifyContent: "center"
  },
  card: {
    width: "200px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "1rem",
    backgroundColor: "#f9f9f9"
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "5px"
  }
};
