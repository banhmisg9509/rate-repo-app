import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/mutation";

export const useCreateUser = () => {
  return useMutation(CREATE_USER);
};
