import { useQuery } from "@apollo/client";
import { GET_RESPOSITORIES } from "../graphql/queries";

export const useRepositories = ({
  first,
  orderBy,
  orderDirection,
  searchKeyword,
}) => {
  const variables = {
    first,
    orderBy: orderBy,
    orderDirection: orderDirection,
    searchKeyword,
  };

  const { data, loading, fetchMore, ...result } = useQuery(GET_RESPOSITORIES, {
    variables,
    fetchPolicy: "cache-and-network",
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return {
    repositories: data?.repositories.edges.map((edge) => edge.node) || [],
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };
};
