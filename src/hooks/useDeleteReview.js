import { useMutation } from "@apollo/client";
import { DELETE_REVIEW } from "../graphql/mutation";

export const useDeleteReview = () => {
  return useMutation(DELETE_REVIEW);
};
