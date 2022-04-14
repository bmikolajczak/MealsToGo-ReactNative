import React from "react";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info.component";
import { SafeArea } from "../../../components/utils/safe.area.component";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
const StyledSearchbar = styled(Searchbar)`
  border-radius: ${(props) => props.theme.sizes[2]};
`;
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <StyledSearchbar placeholder="Search for Ristorante" />
    </SearchContainer>
    <RestaurantList
      data={[{ name: 1 }, { name: 2 }, { name: 3 }]}
      renderItem={() => <RestaurantInfo />}
      keyExtractor={(item) => item.name}
    />
  </SafeArea>
);
