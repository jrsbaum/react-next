/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import PokemonSearch from "../components/PokemonSearch";

interface Props {
  pokemon: any;
}

const Home: NextPage<Props> = ({ pokemon }) => {
  return (
    <div style={{ alignContent: "center" }}>
      <p>É HOOKZINHO QUE TU CURTE ENTAO TOME TOME </p>
      <div>
        <PokemonSearch initialPokemon={pokemon} />
      </div>
    </div>
  );
};

export default Home;
