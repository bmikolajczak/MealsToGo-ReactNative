import React from "react";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import {
  Address,
  Info,
  RestaurantCard,
  Rating,
  OpenSvg,
  Section,
  SectionEnd,
  Icon,
} from "./restaurant-info-card.styles";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Ristorante",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "234 Happy street",
    isOpenNow = true,
    rating = 3,
    isClosedTemporarily = true,
  } = restaurant;
  const ratingArr = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <Card.Cover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Section>
          <Rating>
            {ratingArr.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && <Text variant="error">CLOSED TEMPORARILY</Text>}
            <Spacer position="left" size="large">
              {isOpenNow && <OpenSvg xml={open} width={24} height={24} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Text variant="label">{name}</Text>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
