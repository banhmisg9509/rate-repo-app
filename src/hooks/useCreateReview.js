import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../graphql/mutation";

export const useCreateReview = () => {
  return useMutation(CREATE_REVIEW);
};
