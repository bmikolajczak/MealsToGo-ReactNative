import React from "react";
import styled from "styled-components/native";
import { Text, Image, View } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

const Title = styled.Text`
font-family: ${(props) => props.theme.fonts.heading}
  color: ${(props) => props.theme.colors.text.primary};
`;
const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;
const Info = styled(Card.Content)`
  padding: ${(props) => props.theme.space[3]};
`;
const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;
const Rating = styled.View`
  flex-direction: row;
  padding-bottom: ${(props) => props.theme.space[2]};
`;
const OpenSvg = styled(SvgXml)`
  margin-left: auto;
`;
const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;
const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

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
            {isClosedTemporarily && <Text>CLOSED TEMPORARILY</Text>}
            <View style={{ paddingLeft: 16 }} />
            {isOpenNow && <OpenSvg xml={open} width={24} height={24} />}
            <View style={{ paddingLeft: 16 }} />
            <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
          </SectionEnd>
        </Section>
        <Title>{name}</Title>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
