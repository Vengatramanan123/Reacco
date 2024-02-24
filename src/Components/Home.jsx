import React from 'react';
import "../Components/style.css";
import { SiReactos } from "react-icons/si";
import { BsRocketTakeoff } from "react-icons/bs";
import Typewriter from 'typewriter-effect';   

function Home() {
  return (
    <div className="log">
      <h2 id="titless">
        <SiReactos style={{ fontSize: '20px', color:'black', textAlign:'center' }}/>
        REACOO
      </h2>
      <div>
        <p className="pag">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 50,
              strings: ["Welcome to Reacoo!"]
            }}
          />
        </p>
        <p className='words'>The Way That You Think. The Way That You Will Become 🚀</p>
      </div>
      <div>
        <button className='exp'>
          <BsRocketTakeoff/>&nbsp;
          <a href='/Api'>Explore</a>
        </button>
        
      </div>
    </div>
  );
}

export default Home;
