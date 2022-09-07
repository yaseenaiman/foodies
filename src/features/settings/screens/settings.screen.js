import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { List } from "react-native-paper";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const SettingsScreen = ({ navigation }) => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <List.Section style={styles.settingSection}>
        <List.Item
          style={styles.itemStyle}
          titleStyle={styles.settingList}
          title="المفضلة"
          description="اعرض قائمتك المفضلة"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
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
  },
  descrstyle: {
    fontFamily: "Changa_500Medium",
  },

  itemStyle: {
    padding: 16,
  },
});
