import { useEffect, useState } from "react";
import "./Home.css";

function Home() {
  const [sunglasses, setSunglasses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/sunglasses")
      .then((res) => res.json())
      .then((data) => setSunglasses(data))
      .catch((err) => console.error("Error fetching sunglasses:", err));
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        
        <div className="hero-text">
          <h1>Welcome to SunLux</h1>
          <p>Your destination for premium sunglasses and timeless style.</p>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>Why Choose Us?</h2>
        <p>
          At SunLux, we blend fashion with function. Our sunglasses feature UV400
          protection, durable frames, and a wide variety of styles suited for all seasons.
          With a focus on quality and comfort, SunLux is the clear choice for modern eyewear.
        </p>
      </section>

      {/* Product Section */}
      <section className="product-gallery">
        <h2>Our Collection</h2>
        <div className="products-grid">
          {sunglasses.map((item) => (
            <div key={item.id} className="product-card">
              <img src={item.image} alt={item.name} className="sunglass-image" />
              <h3>{item.name}</h3>
              <p>${item.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;

