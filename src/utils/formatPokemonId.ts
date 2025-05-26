const formatPokemonId = (id: number) => {
  return `#${id.toString().padStart(3, '0')}`;
};

export default formatPokemonId;
