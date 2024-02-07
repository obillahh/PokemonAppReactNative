import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    pokemonList: [],
    pokemonDetails: null,
  },
  reducers: {
    setPokemonList: (state, action) => {
      state.pokemonList = action.payload;
    },
    setPokemonDetails: (state, action) => {
      state.pokemonDetails = action.payload;
    },
  },
});

export const { setPokemonList, setPokemonDetails } = pokemonSlice.actions;

export const selectPokemonList = (state) => state.pokemon.pokemonList;
export const selectPokemonDetails = (state) => state.pokemon.pokemonDetails;

export default pokemonSlice.reducer;
