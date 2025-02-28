import { Image, StyleSheet, View } from "react-native";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 8,
    gap: 12,
    backgroundColor: theme.colors.white,
  },

  info: {
    display: "flex",
    flexDirection: "row",
    gap: 12,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 4,
  },
  language: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    borderRadius: 4,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  stat: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  statItem: {
    alignItems: "center",
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Image style={styles.image} source={{ uri: item.ownerAvatarUrl }} />
        <View style={{ gap: 2 }}>
          <Text fontWeight="bold">{item.fullName}</Text>
          <Text color="textSecondary">{item.description}</Text>
          <View style={{ alignSelf: "flex-start" }}>
            <Text style={styles.language}>{item.language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.stat}>
        <View style={styles.statItem}>
          <Text fontWeight="bold">{item.stargazersCount}</Text>
          <Text color="textSecondary">Stars</Text>
        </View>
        <View style={styles.statItem}>
          <Text fontWeight="bold">{item.forksCount}</Text>
          <Text color="textSecondary">Forks</Text>
        </View>
        <View style={styles.statItem}>
          <Text fontWeight="bold">{item.reviewCount}</Text>
          <Text color="textSecondary">Reviews</Text>
        </View>
        <View style={styles.statItem}>
          <Text fontWeight="bold">{item.ratingAverage}</Text>
          <Text color="textSecondary">Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
