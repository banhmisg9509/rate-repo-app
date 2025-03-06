import { useApolloClient } from "@apollo/client";
import { authStorage } from "../utils/authStorage";
import { useNavigate } from "react-router-native";

export const useLogout = () => {
  const apolloClient = useApolloClient();
  const navigate = useNavigate();

  const logout = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    navigate("/");
  };

  return { logout };
};
