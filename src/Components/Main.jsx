import React, { useState } from "react";
import "../Components/style.css";
import axios from "axios";
import { HiArrowCircleLeft } from "react-icons/hi";

const lab = {
  marginLeft: "-120px",
  fontWeight: "600",
  fontSize: "13px",
  fontFamily: "monospace",
};
const labo = {
  marginLeft: "-140px",
  fontWeight: "600",
  fontSize: "13px",
  fontFamily: "monospace",
};
const labs = {
  marginLeft: "-120px",
  fontWeight: "600",
  fontSize: "13px",
  fontFamily: "monospace",
};
const but1 = {
  borderStyle: "none",
  padding: "5px",
  borderRadius: "3px",
  backgroundColor: "whitesmoke",
};

const Main = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [number, setNumber] = useState("");

  const handleRegister = async () => {
    if(!email || !password){
      alert('Please fill out all mandatory fields');
      return;
    }
    try {
      const reps = await axios.post("http://localhost:3000/api/Main", {
        email,
        password,
        username,
        number
      });
      console.log(reps);
      console.log("User registered successfully");
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  return (
    <div className="log">
     <div  className="Label"><label><a href="http://localhost:3001/api/Login"><HiArrowCircleLeft style={{ fontSize: '28px', color:'black' }} /></a></label></div>
      <h2 id="title">Register</h2>
      <div>
      <label style={labo}>NAME </label>
        <div className="password">
          <input
            type="text"
            id="user"
            value={username}
            onChange={(e) => setUsername(e.target.value)} required
          />
        </div>
        <label style={lab}>CONTACT NO </label>
        <div className="password">
          <input
            type="number"
            id="user"
            value={number}
            onChange={(e) => setNumber(e.target.value)} required
          />
        </div>
        <label style={labs}>USERNAME </label><br /><br />
        <div className="username">
          <input
            type="text"
            id="user"
            value={email}
            onChange={(e) => setEmail(e.target.value)} required
          />
        </div>
        <br />
        <label style={lab}>PASSWORD </label>
        <div className="password">
          <input
            type="password"
            id="user"
            value={password}
            onChange={(e) => setPassword(e.target.value)} required
          />
        </div>
        <button id="but" onClick={handleRegister}>
          Register
        </button>

        <p className="link">
            Already have an account ?
            <a style={but1} href="http://localhost:3001/api/Login"> 
              Log In
            </a>
          </p>
        
        
      </div>
    </div>
  );
};

export default Main;
