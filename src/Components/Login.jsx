import React from "react";
import "../Components/style.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const but1 = {
  borderStyle: "none",
  padding: "5px",
  borderRadius: "3px",
  backgroundColor: "whitesmoke",
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
const navigate = useNavigate();
  
  const handleLogin = async () => {
    try {
      await axios.post("http://localhost:3000/api/Login", { email, password });
      console.log("login successfully...");
      navigate('/api/Explore')
      
    } catch (error) {
      console.error("Login Failed", error);
      console.error("Detailed error:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
      }
    }
  };

  return (
    <div className="container">
      <div className="log">
        <h1 id="titles">Log In..</h1>
        <div className="codes">
          <div className="username">
            <input
              type="text"
              placeholder="Username"
              id="user"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="password">
            <input
              type="password"
              placeholder="Password"
              id="user"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button id="but" onClick={handleLogin}>
            Log in{" "}
          </button>
          
          <p className="link">
            Don't have an account ?
            <a style={but1} href="http://localhost:3001/api/Main"> 
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
