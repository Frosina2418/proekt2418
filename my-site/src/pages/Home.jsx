import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [sunglasses, setSunglasses] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/sunglasses")
      .then(res => setSunglasses(res.data))
      .catch(err => console.error("Error fetching sunglasses:", err));
  }, []);

  const styles = {
    container: {
      padding: "2rem",
      background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
      minHeight: "100vh",
      color: "#fff",
      fontFamily: "Arial, sans-serif",
    },
    title: {
      textAlign: "center",
      marginBottom: "2rem",
      fontSize: "2.5rem",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "2rem",
    },
    card: {
      backgroundColor: "#1e1e1e",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      display: "flex",
      flexDirection: "column",
    },
    cardHover: {
      transform: "translateY(-5px)",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.6)",
    },
    imgWrapper: {
      width: "100%",
      paddingTop: "66.66%", // 3:2 aspect ratio
      position: "relative",
    },
    img: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    content: {
      padding: "1rem",
      textAlign: "center",
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    name: {
      fontSize: "1.25rem",
      marginBottom: "0.5rem",
    },
    price: {
      fontSize: "1rem",
      color: "#ccc",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🕶️ Welcome to Sunglasses Shop</h1>
      <div style={styles.grid}>
        {sunglasses.map((item) => (
          <div
            key={item.id}
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = styles.cardHover.transform;
              e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = styles.card.boxShadow;
            }}
          >
            <div style={styles.imgWrapper}>
              <img src={item.image} alt={item.name} style={styles.img} />
            </div>
            <div style={styles.content}>
              <h2 style={styles.name}>{item.name}</h2>
              <p style={styles.price}>${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
