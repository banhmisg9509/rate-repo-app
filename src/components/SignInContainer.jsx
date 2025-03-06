import { useFormik } from "formik";
import { StyleSheet, View } from "react-native";
import * as yup from "yup";
import Button from "./Button";
import Text from "./Text";
import TextInput from "./TextInput";
import { showError } from "../utils/common";

const styles = StyleSheet.create({
  container: {
    padding: 8,
    gap: 8,
  },
});

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const SignInContainer = ({ handleSignIn, error }) => {
  const form = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      const { username, password } = values;
      handleSignIn(username, password);
    },
    validationSchema,
  });

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Username"
        value={form.values.username}
        onChangeText={form.handleChange("username")}
        error={showError(form, "username")}
      />
      {showError(form, "username") && (
        <Text color="error">{form.errors.username}</Text>
      )}
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={form.values.password}
        onChangeText={form.handleChange("password")}
        error={showError(form, "password")}
      />
      {showError(form, "password") && (
        <Text color="error">{form.errors.password}</Text>
      )}
      {error && <Text color="error">{error}</Text>}
      <Button text="Sign in" onPress={form.handleSubmit} />
    </View>
  );
};

export default SignInContainer;
