import React, { useState } from 'react';
import axios from 'axios';
import Card from './Card';

const App = () => {
  const [pokemon, setPokemon] = useState("pikachu");
  const [pokemonData, setPokemonData] = useState([]);
  const [status, setStatus] = useState(false);

  const getPokemon = async () => {
    const toArray = [];
    try {
      if (pokemon.length > 0) {
        const url = 'https://pokeapi.co/api/v2/pokemon/' + pokemon;
        const res = await axios.get(url);
        toArray.push(res.data);
        setPokemonData(toArray);
        setStatus(true);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase());
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  }

  return (
    <div className="App">

      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" onChange={handleChange} placeholder="Introduce un nombre de Pokemon" />
        </label>
      </form>

      {status > 0 ?
        <Card data={pokemonData[0]} />
        :
        <Card />
      }

    </div>
  );
}

export default App;
