import React from "react";
import { View, Text, Image } from "react-native";

const SelectedPokemon = ({ pokemon1, pokemon2 }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <View>
        {pokemon1 && (
          <>
            <Image
              source={{ uri: pokemon1.sprites.front_default }}
              style={{ width: 100, height: 100 }}
            />
            <Text>{pokemon1.name}</Text>
          </>
        )}
      </View>
      <View>
        {pokemon2 && (
          <>
            <Image
              source={{ uri: pokemon2.sprites.front_default }}
              style={{ width: 100, height: 100 }}
            />
            <Text>{pokemon2.name}</Text>
          </>
        )}
      </View>
    </View>
  );
};

export default SelectedPokemon;
