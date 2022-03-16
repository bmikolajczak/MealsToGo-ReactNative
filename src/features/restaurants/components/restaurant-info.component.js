import React from "react";
import { Text } from "react-native";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Ristorante",
    icon,
    photo = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "234 Happy street",
    isOpenNow = true,
    rating = 3,
    isClosedTemporarily,
  } = restaurant;
  return <Text>{name}</Text>;
};
