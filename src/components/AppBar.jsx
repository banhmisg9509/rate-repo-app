import Constants from "expo-constants";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import { Link } from "react-router-native";
import { useLoggedIn } from "../hooks/useLoggedIn";
import { useLogout } from "../hooks/useLogout";
import theme from "../theme";
import Text from "./Text";

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
  const { isLoggedIn } = useLoggedIn();
  const { logout } = useLogout();

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        contentContainerStyle={{
          flexDirection: "row",
          alignItems: "flex-start",
          gap: 8,
        }}
        snapToAlignment="start"
        pagingEnabled
      >
        <Link to="/">
          <Text style={styles.text}>Ropositories</Text>
        </Link>
        {isLoggedIn && (
          <Link to="/review">
            <Text style={styles.text}>Create a review</Text>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/myReview">
            <Text style={styles.text}>My reviews</Text>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/signIn">
            <Text style={styles.text}>Sign in</Text>
          </Link>
        )}
        {isLoggedIn && (
          <Pressable onPress={() => logout()}>
            <Text style={styles.text}>Logout</Text>
          </Pressable>
        )}
        {!isLoggedIn && (
          <Link to="/signUp">
            <Text style={styles.text}>Sign up</Text>
          </Link>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
