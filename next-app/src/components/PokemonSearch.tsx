/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { getPokemon } from "../services/pokemon.service";

interface Props {
  initialPokemon?: any;
}

const PokemonSearch: React.FC<Props> = ({ initialPokemon }) => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState(initialPokemon);

  useEffect(() => {
    const searchPokemon = async () => {
      const data = await getPokemon(pokemonName);
      setPokemon(data);
    };
    if (pokemonName) {
      searchPokemon();
    }
  }, [pokemonName]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(event.target.value);
  };

  return (
    <div>
      <input type="text" value={pokemonName} onChange={handleInputChange} />
      {pokemon && (
        <div>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      )}
    </div>
  );
};

export default PokemonSearch;
