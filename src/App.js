import React from "react";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";
import Pagination from "./components/Pagination";

function App() {
  const [characters, setCharacters] = useState([]);
 //este estado se la paginacion 
  const [siguiente, setSiguiente] = useState({});

  let urlInitial = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((data) => {
        setCharacters(data.results);
        setSiguiente(data.info);
      
      })
      .catch((error) => console.log(error));
  };

  const onPrevious = () => {
    fetchCharacters(siguiente.prev);
  };

  const onNext = () => {
    fetchCharacters(siguiente.next);
  };

  useEffect(() => {
    fetchCharacters(urlInitial);
  }, []);

  return (
    <>
      <Navbar brand="Rick and Morty App" />

      <div className="container py-5">
        <Pagination
          prev={siguiente.prev}
          next={siguiente.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
        <Characters characters={characters}></Characters>
        <Pagination />
      </div>
    </>
  );
}

export default App;
