import { useQuery } from "@apollo/client";
import { GET_ME } from "../graphql/queries";

export const useMe = () => {
  return useQuery(GET_ME);
};
