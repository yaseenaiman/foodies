import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled(Text)`
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.ui.primary};
  text-align: right;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "مطعم اهواك",
    icon,
    photos = [
      "https://www.citycentremirdif.com/-/media/blogs/2019/june/guilt-free-dining/main-image.jpg?h=600&w=800&la=ar&hash=D2012B65A7D09BC4DE47758AEF3765EDC2FA8E55",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
