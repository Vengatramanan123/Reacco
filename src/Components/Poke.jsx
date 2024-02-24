import React, { useState } from 'react';
import "../Components/style.css";


const Poke = () => {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonSprite, setPokemonSprite] = useState('');

  async function fetchdata() {
    try {
      const pokemonNumber = document.getElementById("pokemon").value;
      const parsedNumber = parseInt(pokemonNumber);

     
      if (isNaN(parsedNumber) || parsedNumber < 1 || parsedNumber > 1302) {
        throw new Error('Invalid Pokemon number. Please enter a number between 1 and 1302.');
      }

      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${parsedNumber}`);
      const data = await response.json();
      const pokemonSpriteUrl = data.sprites.front_default;
      const pokemonName = data.name;

      setPokemonName(pokemonName); // Pokémon name state
      setPokemonSprite(pokemonSpriteUrl); // Pokémon sprite state
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="log">
      <div id="titlesss">Image Generator</div> <br />
      <div>
        <p  style={{fontFamily:'monospace'}}>Enter a Number from "1" to "1302", <br /> you will get a Pokémon</p>
        <br /><br />
        <input type="text" id="pokemon" placeholder='Enter the number of the Pokemon'  />
        <br /><br />
        <button onClick={fetchdata} id='poke'>Hatch The Egg...!!!!</button>
        <br /><br />
        {pokemonName && (
          <div>
            
            <img src={pokemonSprite} alt="Your Pokemon" style={{ display: 'block', marginLeft: '130px' }}  />
            <p style={{fontFamily:'monospace'}}>Woohooo....!!!🎊 You Got  {pokemonName} 🌟</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Poke;
