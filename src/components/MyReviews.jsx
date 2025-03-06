import { Alert, FlatList, RefreshControl } from "react-native";
import { useNavigate } from "react-router-native";
import { useDeleteReview } from "../hooks/useDeleteReview";
import { useMe } from "../hooks/useMe";
import ItemSeparator from "./ItemSeparator";
import ReviewItem from "./ReviewItem";
import Text from "./Text";
import { useMyReviews } from "../hooks/useMyReviews";

const MyReviews = () => {
  const { reviews , refetch, loading } = useMyReviews();
  const [deleteReview] = useDeleteReview();
  const navigate = useNavigate();

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => (
        <ReviewItem
          item={item}
          handleViewRepo={() => {
            navigate(`/repo/${item.repositoryId}`);
          }}
          handleDeleteReview={() => {
            Alert.alert(
              "Delete review",
              "Are you sure you want to delete this review?",
              [
                {
                  text: "Cancel",
                },
                {
                  text: "Delete",
                  onPress: async () => {
                    await deleteReview({
                      variables: { id: item.id },
                    });
                    refetch();
                  },
                },
              ]
            );
          }}
        />
      )}
      ItemSeparatorComponent={ItemSeparator}
      ListEmptyComponent={<Text>You haven't reviewed any repositories</Text>}
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={() => refetch()} />
      }
    />
  );
};

export default MyReviews;
