// PokemonRepository.js
import axios from "axios";

const API_ENDPOINT = "https://pokeapi.co/api/v2/pokemon";

class PokemonRepository {
  async getPokemonList(offset = 0, limit = 25) {
    try {
      const response = await axios.get(
        `${API_ENDPOINT}?offset=${offset}&limit=${limit}`
      );
      return response.data.results;
    } catch (error) {
      throw new Error("Error fetching Pokemon data");
    }
  }

  async getPokemonDetailsByName(name) {
    try {
      const response = await axios.get(`${API_ENDPOINT}/${name}`);
      return response;
    } catch (error) {
      throw new Error("Error fetching Pokemon details");
    }
  }
}

export default PokemonRepository;
