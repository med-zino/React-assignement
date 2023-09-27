// pokemonUtils.js

export function calculatePower(data) {
    return data.map((pokemon) => ({
      ...pokemon,
      power: pokemon.hp + pokemon.attack + pokemon.defense + pokemon.special_attack + pokemon.special_defense + pokemon.speed,
    }));
  }
  

  export function findMaxPower(data) {
    if (data.length === 0) {
      return null; // Handle empty data
    }
  
    return Math.max(...data.map((pokemon) => pokemon.power));
  }
  
  export function findMinPower(data) {
    if (data.length === 0) {
      return null; // Handle empty data
    }
  
    return Math.min(...data.map((pokemon) => pokemon.power));
  }