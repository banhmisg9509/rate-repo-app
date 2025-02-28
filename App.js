import Main from "./src/components/Main";
import { StatusBar } from "expo-status-bar";
import { NativeRouter } from "react-router-native";

export default function App() {
  return (
    <>
      <NativeRouter future={{ v7_relativeSplatPath: true }}>
        <Main />
      </NativeRouter>
      <StatusBar style="auto" />
    </>
  );
}
