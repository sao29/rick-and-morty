import React from "react";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";

function App() {
  const [characters, setCharacters] = useState([]);

  let urlInitial = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
      .then((datos) => datos.json())
      .then((info) => setCharacters(info.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchCharacters(urlInitial);
  }, []);

  return (
    <>
      <Navbar brand="Rick and Morty App" />
      <div className="container">
    <Characters  characters={characters}></Characters>
      </div>
    </>
  );
}

export default App;
