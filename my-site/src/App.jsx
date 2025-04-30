import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [sunglasses, setSunglasses] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/sunglasses")
      .then((response) => {
        setSunglasses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching sunglasses:", error);
      });
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Sunglasses Collection</h1>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {sunglasses.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "1rem",
              width: "200px",
              textAlign: "center",
              backgroundColor: "#f9f9f9"
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
            <h3>{item.name}</h3>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
