import React, { useState } from 'react';
import "../Components/style.css";

const TextToSpeech = () => {
  const [text, setText] = useState('');
  const [synthesis, setSynthesis] = useState(null);

  const speak = () => {
    if ('speechSynthesis' in window) {
      const synthesis = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(synthesis);
      setSynthesis(synthesis);
    } else {
      alert('Speech synthesis is not supported in your browser.');
    }
  };

  const stopSpeaking = () => {
    if (synthesis) {
      window.speechSynthesis.cancel();
      setSynthesis(null);
    }
  };

  return (
    <div className='log'>
      <h2 id="titless">
       Text To Speech Convertor
      </h2>
      
      <div className='t'>
      <p className='word'><b>Note:</b>&nbsp;&nbsp;You can able to enter text <br /> and convert into speech <br /> using "SpeechSyenthesis" method. <br />
      Then, You can able to resize the text area <br /> as per your wish</p>
      </div>
     
      <textarea className='Txtarea'
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type text here..."
      /> 
      
      <div >
        <br />
      <button className='spe1' onClick={speak}>Speak</button> &nbsp;&nbsp;&nbsp;
      <button className='spe2' onClick={stopSpeaking}>Stop</button>
      </div>
      
    </div>
  );
};

export default TextToSpeech;
