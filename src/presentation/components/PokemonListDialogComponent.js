// PokemonListDialog.js
import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

const PokemonListDialog = ({ onSelect }) => {
  const [pokemonList, setPokemonList] = useState([
    { id: 1, name: "Bulbasaur", sprites: { front_default: "bulbasaur.png" } },
    { id: 2, name: "Charmander", sprites: { front_default: "charmander.png" } },
    { id: 3, name: "Squirtle", sprites: { front_default: "squirtle.png" } },
    // Add more Pokemon data as needed
  ]);

  const handlePokemonSelect = (pokemon) => {
    onSelect(pokemon);
  };

  return (
    <View>
      <FlatList
        data={pokemonList}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePokemonSelect(item)}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default PokemonListDialog;
