import estilos from "./Card.module.css";
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  let [id, setId] = useState("");

  const handleInputChange = (event) => {
    setId(event.target.value);
  };

  const handleSearch = () => {
    onSearch(id);
  };

  const handleRandom = () => {
    const random = Math.floor(Math.random() * (626 - 1) + 1);
    onSearch(random)
  }

  const enter = (event) => {
    
    if(event.keyCode === 13){
      handleSearch();
    }
  }


  return (
    <div className={estilos.search}>
      <input
        className={estilos.input}
        type="search"
        value={id}
        onChange={handleInputChange}
        onKeyDown={enter}
        placeholder="ingresa id"
      />
      <button className={estilos.button} onClick={handleSearch}>
        Agregar
      </button>
      <button className={estilos.button} onClick={handleRandom}> Personaje  Aleatorio</button>

    </div>
  );
}
