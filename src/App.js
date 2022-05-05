import React from "react";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";
import Pagination from "./components/Pagination";

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  let urlInitial = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      
      })
      .catch((error) => console.log(error));
  };

  const onPrevious = () => {
    fetchCharacters(info.prev);
  };

  const onNext = () => {
    fetchCharacters(info.next);
  };

  useEffect(() => {
    fetchCharacters(urlInitial);
  }, []);

  return (
    <>
      <Navbar brand="Rick and Morty App" />

      <div className="container py-5">
        <Pagination
          prev={info.prev}
          next={info.next}
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
