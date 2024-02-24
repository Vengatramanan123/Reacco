import React, { useState } from "react";
import axios from "axios";

const RandomTerm = () => {
  const [term, setTerm] = useState("");
  const [randomTerm, setRandomTerm] = useState("");
  const [error, setError] = useState(null);

  const fetchRandomTerm = async () => {
    try {
      const response = await axios.get(
        "https://mashape-community-urban-dictionary.p.rapidapi.com/define",
        {
          params: { term },
          headers: {
            "X-RapidAPI-Key":
              "858695dc56msh590c2c38c34e4b7p1d3c6ajsn2ba39804483e",
            "X-RapidAPI-Host":
              "mashape-community-urban-dictionary.p.rapidapi.com",
          },
        }
      );
      if (
        response.data &&
        response.data.list &&
        response.data.list.length > 0
      ) {
        const randomIndex = Math.floor(
          Math.random() * response.data.list.length
        );
        const randomTermData = response.data.list[randomIndex];
        setRandomTerm(randomTermData.definition);
        setError(null);
      } else {
        setError("No terms found for the entered term.");
        setRandomTerm("");
      }
    } catch (error) {
      setError("Error fetching random term. Please try again later.");
      setRandomTerm("");
    }
  };

  return (
    <div className="log">
      <h2 id="titless">Random Terms Finder</h2>
      <div>
        <div className="t">
          <p className="word">
            <b>Note:</b> You Can Able To Know The Terms That <br />
            You Want And Need.
          </p>
        </div>
        <br />
        <input
          type="text"
          id="term"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Enter a term"
        />
        <br />
        <br />
        <button className="spe11" onClick={fetchRandomTerm}>
          Get Random Term
        </button>
        <p className="words">
          <b>The Terms That You Enter will be Shown Below</b>
        </p>
          {error && <p  className="words">{error}</p>}
          {randomTerm && <p  className="words">{randomTerm}</p>}
       
      </div>
    </div>
  );
};

export default RandomTerm;
