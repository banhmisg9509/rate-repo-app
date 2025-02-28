import Constants from "expo-constants";
import { ScrollView, StyleSheet, View } from "react-native";
import Text from "./Text";
import theme from "../theme";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.textPrimary,
    padding: 8,
    paddingTop: Constants.statusBarHeight + 8,
    display: "flex",
  },
  text: {
    color: theme.colors.white,
    fontWeight: theme.fontWeights.bold,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        contentContainerStyle={{
          flexDirection: "row",
          alignItems: "flex-start",
          gap: 4,
        }}
        snapToAlignment="start"
        pagingEnabled
      >
        <Link to={"/"}>
          <Text style={styles.text}>Ropositories</Text>
        </Link>
        <Link to={"/signIn"}>
          <Text style={styles.text}>SignIn</Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
