import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const Icon = styled.Image`
  width: 25px;
  height: 25px;
`;
export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
export const Section = styled.View`
  flex-direction: row-reverse;
  align-items: center;
`;
export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row-reverse;
  justify-content: flex-end;
`;
export const Rating = styled.View`
  flex-direction: row-reverse;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;
export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  text-align: right;
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
