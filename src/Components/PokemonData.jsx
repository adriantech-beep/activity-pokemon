import PropTypes from "prop-types";

const PokemonData = ({ pokemons }) => {
  return (
    <tbody>
      {pokemons.map((pokemon) => (
        <tr key={pokemon.id} className="hover:bg-slate-800">
          <td className="p-2 border border-slate-700">{pokemon.name}</td>
          <td className="p-2 border border-slate-700">
            <img src={pokemon.image} alt={pokemon.name} className="w-16 h-16" />
          </td>
          <td className="p-2 border border-slate-700">
            {pokemon.type === "Fire" ? "🔥" : ""}
            {pokemon.type === "Water" ? "💦" : ""}
            {pokemon.type === "Air" ? "🪽" : ""}
            {pokemon.type === "Grass" ? "🌿" : ""}
          </td>
        </tr>
      ))}
    </tbody>
  );
};
PokemonData.propTypes = {
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PokemonData;
