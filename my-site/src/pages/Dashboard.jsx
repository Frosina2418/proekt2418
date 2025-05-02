import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Contact & Store Info</h2>
      <p>Email: info@sunglasses-shop.com</p>
      <p>Phone: +389 70 123 456</p>
      <p>Address: Skopje City Mall, Floor 1</p>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgkhr_5BrLCrNDrULuxgw0D1LSnHJ08SB46Q&s"
        alt="Store"
        className="store-image"
      />
    </div>
  );
};

export default Dashboard;
