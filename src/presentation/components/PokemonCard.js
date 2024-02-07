import React, { useEffect, useState } from "react";
import { Card, Title, ActivityIndicator } from "react-native-paper";
import axios from "axios";
import { Dimensions, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;
const cardWidth = (windowWidth - 48) / 2;

const PokemonCard = ({ pokemon }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await axios.get(pokemon.url);
        const data = response.data;
        setImageUrl(data.sprites?.front_default);
      } catch (error) {
        console.error("Error fetching Pokemon details:", error);
        setError(error.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonDetails();
  }, [pokemon.url]);

  const handlePokemonPress = () => {
    navigation.navigate("DetailPokemonPage", { pokemon });
  };

  if (loading) {
    return (
      <Card style={{ width: cardWidth, marginBottom: 16 }}>
        <ActivityIndicator animating={true} />
      </Card>
    );
  }

  if (error) {
    return (
      <Card style={{ width: cardWidth, marginBottom: 16 }}>
        <Card.Content>
          <Title>Error Loading Pokemon</Title>
        </Card.Content>
      </Card>
    );
  }

  return (
    <TouchableOpacity onPress={handlePokemonPress}>
      <Card style={{ width: cardWidth, marginBottom: 16 }}>
        <Card.Cover source={{ uri: imageUrl }} />
        <Card.Content>
          <Title>{pokemon.name}</Title>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

export default PokemonCard;
