import { StyleSheet, TextInput as BaseInput } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  input: {
    borderStyle: "solid",
    borderColor: theme.colors.textSecondary,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: theme.colors.white,
    height: 45,
    paddingHorizontal: 8,
  },
});
const TextInput = ({ error, ...props }) => {
  return (
    <BaseInput
      style={{
        ...styles.input,
        borderColor: error ? theme.colors.error : styles.input.borderColor,
      }}
      {...props}
    />
  );
};

export default TextInput;
