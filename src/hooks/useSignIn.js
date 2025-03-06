import { useApolloClient, useMutation } from "@apollo/client";
import { SIGN_IN } from "../graphql/mutation";
import { authStorage } from "../utils/authStorage";
import { useNavigate } from "react-router-native";
import { useState } from "react";

let timerId;
export const useSignIn = () => {
  const [mutate] = useMutation(SIGN_IN);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const apolloClient = useApolloClient();

  const handleSignIn = async (username, password) => {
    try {
      const { data } = await mutate({
        variables: { credentials: { username, password } },
      });
      const token = data.authenticate.accessToken;
      authStorage.setAccessToken(token);
      apolloClient.resetStore();
      navigate("/");
    } catch (err) {
      setError(err.message);
      clearTimeout(timerId);
      timerId = setTimeout(() => setError(""), 3000);
    }
  };

  return { handleSignIn, error };
};
