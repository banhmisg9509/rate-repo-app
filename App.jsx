import { ApolloProvider } from "@apollo/client";
import { NativeRouter } from "react-router-native";
import Main from "./src/components/Main";
import client from "./src/utils/apolloClient";

const App = () => {
  return (
    <NativeRouter>
      <ApolloProvider client={client}>
        <Main />
      </ApolloProvider>
    </NativeRouter>
  );
};

export default App;
