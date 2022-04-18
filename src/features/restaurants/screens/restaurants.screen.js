import React, { useContext } from "react";
import styled from "styled-components/native";
import { FlatList, View } from "react-native";
import { Searchbar, ActivityIndicator } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info.component";
import { SafeArea } from "../../../components/utils/safe.area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { theme } from "../../../infrastructure/theme";

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
const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;
export const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading
            size={50}
            style={{ marginLeft: -25 }}
            color={theme.colors.ui.success}
          />
        </LoadingContainer>
      )}
      <SearchContainer>
        <StyledSearchbar placeholder="Search for Ristorante" />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return <RestaurantInfo restaurant={item} />;
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
