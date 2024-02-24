import React, { useEffect, useState } from "react";
import { LiaUserSecretSolid } from "react-icons/lia";
import axios from "axios";
import "../Components/style.css";
import { FaUserCircle } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { MdOutgoingMail } from "react-icons/md";
import Gif from '../result.gif'

const cardStyle = {
  border: "1px solid #ddd",
  borderRadius: "8px",
  overflow: "hidden",
  marginTop: "50px",
  marginLeft: "30px",
  width: "300px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  backgroundColor: "lightgreen",
};

const contentStyle = {
  padding: "3px",
  fontSize:'13px',
  fontFamily:'monospace'

};

const titleStyle = {
  fontSize: "20px",
  marginRight: "150px",
};

const Start = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/Explore`).then((res) => {
      console.log(res);
      setUsers(res.data || []);
    });
  }, []);

  const firstUser = users.length > 0 ? users[2] : null;

  return (
    <div className="log">
      <div id="titlesss">HOME</div>
      <div style={cardStyle}>
        <h3 style={titleStyle}>
          <LiaUserSecretSolid style={{ fontSize: "25px", color: "black" }} />{" "}
          PROFILE
        </h3>
        <div className='List' style={contentStyle}>
          {/* <ul style={{ listStyle: "none", padding: 0 , fontFamily:'monospace'}}>
            {users.map((item, index) => (
              <li key={index}>
                <p>Name: {item.username}</p>
                <p>Email: {item.email}</p>
                <p>Number: {item.number}</p>
              </li>
            ))}
          </ul> */}
           {firstUser && (
            <div>
              <p style={{marginLeft:'-160px'}}><FaUserCircle/> Name:{firstUser.username}</p>
              <p style={{marginLeft:'-83px'}}><FaSquarePhone/> Email: {firstUser.email}</p>
              <p style={{marginLeft:'-93px'}}><MdOutgoingMail /> Number: {firstUser.number}</p>
            </div>
          )}
        </div>
        
          
      </div>
      <div>
          <h3>Your Blog</h3>
          <p style={{fontFamily:'monospace', fontSize:'15px'}}>Today's Process <br/> Tomorrow's Result 🌟🌈</p>
          <p style={{fontFamily:'monospace', fontSize:'15px'}}>You Can Able To Use <br/> Some of the Rest API's in the Blog</p>
         <a style={{cursor:'pointer'}} href="http://localhost:3001/Home"><img src={Gif} style={{width:'100px'}}/></a>
        </div>
    </div>
  );
};

export default Start; 
