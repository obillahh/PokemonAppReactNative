import React, { useEffect, useCallback } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import PokemonCard from "../components/PokemonCard";
import HeaderComponent from "../components/HeaderComponent";
import { useNavigation } from "@react-navigation/native";
import {
  selectPokemonList,
  setPokemonList,
} from "../../manager/redux/slices/pokemonSlice";
import PokemonRepository from "../../data/repositories/PokemonRepositories";

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const HomePage = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector(selectPokemonList);
  const navigation = useNavigation();

  const fetchPokemonData = useCallback(async () => {
    try {
      const repository = new PokemonRepository();
      const data = await repository.getPokemonList();
      const serializedPokemonList = data.map(({ name, url }) => ({
        name: capitalizeFirstLetter(name),
        url,
      }));
      dispatch(setPokemonList(serializedPokemonList));
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchPokemonData();
  }, [fetchPokemonData]);

  const handlePokemonPress = async (pokemon) => {
    try {
      const repository = new PokemonRepository();
      const pokemonData = await repository.getPokemonDetailsByName(
        pokemon.name
      );
      if (pokemonData && pokemonData.name) {
        navigation.navigate("DetailPokemonPage", { name: pokemonData.name });
      } else {
        throw new Error("Invalid Pokemon data");
      }
    } catch (error) {
      console.error(
        `Error fetching Pokemon details for ${pokemon.name}:`,
        error
      );
    }
  };

  const fetchNextData = ({ layoutMeasurement, contentOffset, contentSize }) => {
    const isCloseToBottom =
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;

    if (isCloseToBottom) {
      fetchPokemonData();
    }
  };

  return (
    <ScrollView
      onScroll={({ nativeEvent }) => fetchNextData(nativeEvent)}
      onEndReachedThreshold={0.1}
    >
      <>
        <HeaderComponent />
        <View style={styles.container}>
          {pokemonList.map((item) => (
            <TouchableOpacity
              key={item.url}
              onPress={() => handlePokemonPress(item)}
            >
              <PokemonCard pokemon={item} />
            </TouchableOpacity>
          ))}
        </View>
      </>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 16,
  },
});

export default HomePage;
