import React from "react";
import { Appbar } from "react-native-paper";

const HeaderComponent = () => {
  return (
    <Appbar.Header style={{ backgroundColor: "#DC0A2D" }}>
      <Appbar.Content
        title={`PokemonApp - Mohd Ryan Obillah`}
        titleStyle={{ color: "white" }}
      />
    </Appbar.Header>
  );
};

export default HeaderComponent;
