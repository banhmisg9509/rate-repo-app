import { useQuery } from "@apollo/client";
import { GET_RESPOSITORIES } from "../graphql/queries";

export const useRepositories = () => {
  return useQuery(GET_RESPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });
};
