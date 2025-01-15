import Pokemon from "./Components/Pokemon";
import PokemonData from "./Components/PokemonData";

function App() {
  const pokemons = [
    {
      id: "#001",
      name: "Bulbasaur",
      type: "Grass",
      image:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
    },
    {
      id: "#004",
      name: "Charmander",
      type: "Fire",
      image:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
    },
    {
      id: "#007",
      name: "Squirtle",
      type: "Water",
      image:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
    },
  ];
  return (
    <div className="bg-slate-950 flex items-center justify-center min-h-screen">
      <table className="text-white border-collapse">
        <Pokemon />
        <PokemonData pokemons={pokemons} />
      </table>
    </div>
  );
}

export default App;
