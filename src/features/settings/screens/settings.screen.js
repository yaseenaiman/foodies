import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { List, Avatar } from "react-native-paper";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import styled from "styled-components/native";
import { Text } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
const AvatarContainer = styled.View`
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <AvatarContainer>
        <List.Section style={styles.settingSection}>
          <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
          <Spacer position="top" size="large">
            <Text style={styles.textSetting}>{user.email}</Text>
          </Spacer>
          <List.Item
            style={styles.itemStyle}
            titleStyle={styles.settingList}
            title="المفضلة"
            description="اعرض قائمتك المفضلة"
            left={(props) => (
              <List.Icon {...props} color="black" icon="heart" />
            )}
            onPress={() => navigation.navigate("Favourites")}
            descriptionStyle={styles.descrstyle}
          />
          <List.Item
            style={styles.itemStyle}
            titleStyle={styles.settingList}
            title="تسجيل خروج"
            left={(props) => <List.Icon {...props} color="black" icon="door" />}
            onPress={onLogout}
          />
        </List.Section>
      </AvatarContainer>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  settingList: {
    fontFamily: "Changa_500Medium",
    fontSize: "16",
  },

  settingSection: {
    direction: "rtl",
    padding: 64,
  },
  descrstyle: {
    fontFamily: "Changa_500Medium",
  },

  itemStyle: {
    padding: 16,
  },

  textSetting: {
    fontFamily: "Changa_500Medium",
    textAlign: "center",
    fontSize: "16",
  },
});
