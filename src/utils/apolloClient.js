import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Constants from "expo-constants";
import { authStorage } from "./authStorage";

const APOLLO_URI = Constants.expoConfig.extra.APOLLO_URI;

const httpLink = createHttpLink({
  uri: APOLLO_URI,
});

const authLink = setContext(async (_, { headers }) => {
  try {
    const token = await authStorage.getAccessToken();
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  } catch {
    return {
      headers,
    };
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
