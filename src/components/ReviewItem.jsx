import { StyleSheet, View } from "react-native";
import theme from "../theme";
import Text from "./Text";
import Button from "./Button";

const toString = (str) => {
  const date = new Date(str);
  return `${String(date.getDate()).padStart(2, "0")}.${String(
    date.getMonth() + 1
  ).padStart(2, "0")}.${date.getFullYear()}`;
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    gap: 8,
    backgroundColor: theme.colors.white,
  },
  review: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
  },
  rating: {
    borderRadius: "50%",
    borderColor: theme.colors.primary,
    borderWidth: 2,
    width: 35,
    height: 35,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  actions: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
  },
});

const ReviewItem = ({ item, handleViewRepo, handleDeleteReview }) => {
  return (
    <View style={styles.container}>
      <View style={styles.review}>
        <View style={styles.rating}>
          <Text fontWeight="bold" color="primary">
            {item.rating}
          </Text>
        </View>
        <View style={{ flexDirection: "column", flex: 1 }}>
          <Text fontWeight="bold">{item.user.username}</Text>
          <Text color="textSecondary">{toString(item.createdAt)}</Text>
          <Text>{item.text}</Text>
        </View>
      </View>
      {Boolean(handleViewRepo) && Boolean(handleDeleteReview) && (
        <View style={styles.actions}>
          <Button
            text="View repository"
            style={{ flex: 1 }}
            onPress={handleViewRepo}
          />
          <Button
            text="Delete review"
            color="error"
            style={{ flex: 1 }}
            onPress={handleDeleteReview}
          />
        </View>
      )}
    </View>
  );
};

export default ReviewItem;
