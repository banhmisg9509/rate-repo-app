import { useQuery } from "@apollo/client";
import { GET_ME } from "../graphql/queries";

export const useMe = (includeReviews = false) => {
  return useQuery(GET_ME, {
    variables: { includeReviews },
    fetchPolicy: "cache-and-network",
  });
};
