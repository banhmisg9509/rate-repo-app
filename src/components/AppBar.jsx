import Constants from "expo-constants";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import { Link } from "react-router-native";
import { useMe } from "../hooks/useMe";
import theme from "../theme";
import Text from "./Text";
import { authStorage } from "../utils/authStorage";
import { useApolloClient } from "@apollo/client";

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
  const { data } = useMe();
  const apolloClient = useApolloClient();
  
  const logout = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

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
        {!(data && data.me) && (
          <Link to={"/signIn"}>
            <Text style={styles.text}>SignIn</Text>
          </Link>
        )}
        {data && data.me && (
          <Pressable onPress={() => logout()}>
            <Text style={styles.text}>Logout</Text>
          </Pressable>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
