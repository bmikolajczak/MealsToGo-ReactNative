import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

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
const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

export { Address, Info, RestaurantCard, Rating, OpenSvg, Section, SectionEnd, Icon };
