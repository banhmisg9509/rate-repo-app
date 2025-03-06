import { useQuery } from "@apollo/client";
import { GET_RESPOSITORY } from "../graphql/queries";

export const useRepository = ({ id, first }) => {
  const variables = { id, first };

  const { data, loading, fetchMore, ...result } = useQuery(GET_RESPOSITORY, {
    variables,
    fetchPolicy: "cache-and-network",
  });

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return {
    repository: data?.repository ?? {},
    reviews: data?.repository.reviews.edges.map((item) => item.node) || [],
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };
};
