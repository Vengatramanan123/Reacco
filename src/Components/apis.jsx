import React from 'react'
import "../Components/style.css";


function apis() {
  return (
    <div className="log">
      <h2 id="titless">
        REACOO API'S
      </h2>
      <div>
        <p className='words'>Here are the Some API'S for you to get experienced....🌟🫧</p>
      </div>
      <div className="api">
        <ui>
            <li style={{marginLeft:'-124px'}}>👽<a href='/PokeApi'>Pokeapi</a></li> <br />
            <li>🔤<a href='/TextApi'>Text to Speech Convertor</a></li> <br />
            <li style={{marginLeft:'-34px'}}>📝<a href="/TermsFinder">Random Terms Finder</a></li> <br />
            <li style={{marginLeft:'-50px'}}>🔖<a href='/TextAnalyzer'>Sentence Analyzer</a></li>
            <li></li>
        </ui>
      </div>
    </div>
  )
}

export default apis