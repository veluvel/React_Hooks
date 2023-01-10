import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const goToHome = () => {
  navigate("./home");
  };
  return (
    <div>
      Login
      <Link to={"./home"}>Home</Link>
      <button onClick={() => goToHome()}>Navigate to Home</button>
      <Link to={"./profile"}>Profile</Link>
    </div>
  );
};

export default Login;
