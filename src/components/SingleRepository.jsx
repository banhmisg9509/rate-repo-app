import { FlatList, RefreshControl, StyleSheet, View } from "react-native";
import { useParams } from "react-router-native";
import { useRepository } from "../hooks/useRepository";
import RepositoryItem from "./RepositoryItem";
import Text from "./Text";
import ReviewItem from "./ReviewItem";
import ItemSeparator from "./ItemSeparator";

const SingleRepository = () => {
  const { id } = useParams();
  const { repository, reviews, loading, refetch, fetchMore } = useRepository({
    id,
    first: 4,
  });

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem item={item} />}
      ItemSeparatorComponent={ItemSeparator}
      ListEmptyComponent={
        <View>
          <Text>There is no review..</Text>
        </View>
      }
      ListHeaderComponent={
        <View>
          <RepositoryItem item={repository} />
          <ItemSeparator />
        </View>
      }
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={() => refetch()} />
      }
      onEndReached={() => fetchMore()}
    />
  );
};

export default SingleRepository;
