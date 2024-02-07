import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import { BarChart } from "react-native-chart-kit";
import PokemonRepository from "../../data/repositories/PokemonRepositories";

const DetailPokemonPage = ({ route }) => {
  const { pokemon } = route.params;
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const repository = new PokemonRepository();
        const details = await repository.getPokemonDetailsByName(pokemon.name);
        setPokemonDetails(details);
      } catch (error) {
        console.error("Error fetching Pokemon details:", error);
      }
    };

    fetchPokemonDetails();
  }, [pokemon]);

  if (!pokemonDetails) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  const { sprites, height, weight, types, stats, abilities } = pokemonDetails;

  return (
    <ScrollView>
      <View style={{ alignItems: "center" }}>
        <Image
          source={{ uri: sprites.front_default }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <Card>
        <Card.Content>
          <Title>{pokemon.name}</Title>
          <Paragraph>Height: {height}</Paragraph>
          <Paragraph>Weight: {weight}</Paragraph>
          <Paragraph>
            Types: {types.map((type) => type.type.name).join(", ")}
          </Paragraph>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Title>Stats</Title>
          <BarChart
            data={{
              labels: stats.map((stat) => stat.stat.name),
              datasets: [
                {
                  data: stats.map((stat) => stat.base_stat),
                },
              ],
            }}
            width={400}
            height={200}
            yAxisSuffix=""
            chartConfig={{
              backgroundColor: "#ffffff",
              backgroundGradientFrom: "#ffffff",
              backgroundGradientTo: "#ffffff",
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
          />
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Title>Abilities</Title>
          {abilities.map((ability) => (
            <View key={ability.ability.name}>
              <Text>Name: {ability.ability.name}</Text>
              <Text>Description: {ability.ability.url}</Text>
            </View>
          ))}
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

export default DetailPokemonPage;
