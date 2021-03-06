import React from "react";
import styled from "styled-components/native";
import { View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;
const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
const RestaurantList = styled(View)`
  flex: 1;
  flex-grow: 1;
  background-color: ${(props) => props.theme.colors.ui.tertiary};
  padding: ${(props) => props.theme.space[3]};
`;
const StyledSearchbar = styled(Searchbar)`
  border-radius: ${(props) => props.theme.sizes[2]};
`;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <StyledSearchbar placeholder="Search for Ristorante" />
    </SearchContainer>
    <RestaurantList>
      <RestaurantInfo />
    </RestaurantList>
  </SafeArea>
);
