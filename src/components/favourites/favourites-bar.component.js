import React from "react";
import { Text } from "../typography/text.components";
import { StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Spacer } from "../spacer/spacer.component";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;
export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesWrapper>
      <Spacer position="right" size="large">
        <Text variant="caption">المفضلة</Text>
      </Spacer>
      <ScrollView
        style={styles.scrollstyle}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() =>
                  onNavigate("RestaurantDetail", {
                    restaurant,
                  })
                }
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};

const styles = StyleSheet.create({
  scrollstyle: {
    flexDirection: "row-reverse",
    direction: "rtl",
  },
});
