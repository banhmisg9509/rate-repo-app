import { useMutation } from "@apollo/client";
import { SIGN_IN } from "../graphql/mutation";

export const useSignIn = () => {
  return useMutation(SIGN_IN);
};

