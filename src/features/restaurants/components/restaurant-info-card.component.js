import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;

const Title = styled(Text)`
  padding: 16px;
  color: black;
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
