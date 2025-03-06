import { useState } from "react";
import { useCreateUser } from "./useCreateUser";
import { useSignIn } from "./useSignIn";

let timeId;

export const useSignUp = () => {
  const [mutate] = useCreateUser();
  const [error, setError] = useState("");
  const { handleSignIn } = useSignIn();

  const handleSignUp = async (username, password) => {
    try {
      await mutate({ variables: { user: { username, password } } });
      await handleSignIn(username, password);
    } catch (err) {
      setError(err.message);

      clearTimeout(timeId);
      timeId = setTimeout(() => setError(""), 3000);
    }
  };

  return { handleSignUp, error };
};
