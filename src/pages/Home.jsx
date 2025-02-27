import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container text-center mt-5">
      <h1>Welcome to the Employee Management System</h1>
      <p>This is the home page.</p>
      <button className="btn btn-primary" onClick={() => navigate("/login")}>
        Go to Login
      </button>
    </div>
  );
};

export default Home;
