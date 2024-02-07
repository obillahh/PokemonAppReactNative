// CompareScreen.js
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Appbar, Button, Dialog, Portal } from "react-native-paper";
import SelectedPokemon from "../components/SelectedPokemonComponent";
import PokemonListDialog from "../components/PokemonListDialogComponent";
import ComparisonChart from "../components/ComparasionChartComponent";

const ComparePage = () => {
  const [selectedPokemon1, setSelectedPokemon1] = useState(null);
  const [selectedPokemon2, setSelectedPokemon2] = useState(null);
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const handlePokemonSelect = (pokemon) => {
    if (!selectedPokemon1) {
      setSelectedPokemon1(pokemon);
    } else if (!selectedPokemon2) {
      setSelectedPokemon2(pokemon);
    }
    hideDialog();
  };

  const clearSelectedPokemon = () => {
    setSelectedPokemon1(null);
    setSelectedPokemon2(null);
  };

  return (
    <>
      <Appbar.Header style={{ backgroundColor: "#DC0A2D" }}>
        <Appbar.Content title="Compare" />
      </Appbar.Header>
      <View style={{ flex: 1 }}>
        <SelectedPokemon
          pokemon1={selectedPokemon1}
          pokemon2={selectedPokemon2}
        />
        {selectedPokemon1 && selectedPokemon2 ? (
          <ComparisonChart
            pokemon1={selectedPokemon1}
            pokemon2={selectedPokemon2}
          />
        ) : (
          <Text style={{ textAlign: "center", marginTop: 20 }}>
            Select two Pokémon to compare.
          </Text>
        )}
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Choose Pokemon</Dialog.Title>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Close</Button>
            </Dialog.Actions>
            <PokemonListDialog onSelect={handlePokemonSelect} />
          </Dialog>
        </Portal>
      </View>
      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 20,
          right: 20,
          backgroundColor: "#DC0A2D",
          padding: 10,
          borderRadius: 5,
        }}
        onPress={showDialog}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>
          Select Pokemon
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default ComparePage;