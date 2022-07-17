import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">
      <h1>Your Gear for Your Sport</h1>
      <Link className="btn btn-primary" to="/catalog1">
        Check out the catalog!
      </Link>
    </div>
  );
};

export default Home;
