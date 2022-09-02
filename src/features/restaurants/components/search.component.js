import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { StyleSheet } from "react-native";

import { LocationContext } from "../../../services/location/location.context";
const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  return (
    <SearchContainer>
      <Searchbar
        inputStyle={styles.SearchItem}
        textAlign="right"
        placeholder="أدخل اسم المدينة"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};

const styles = StyleSheet.create({
  SearchItem: {
    fontFamily: "Changa_500Medium",
    fontSize: "16",
    textAlign: "right",
  },
});
