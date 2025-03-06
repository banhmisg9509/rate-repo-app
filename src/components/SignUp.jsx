import { useFormik } from "formik";
import { StyleSheet, View } from "react-native";
import * as yup from "yup";
import Button from "./Button";
import TextInput from "./TextInput";
import Text from "./Text";
import { showError } from "../utils/common";
import { useCreateUser } from "../hooks/useCreateUser";
import { useSignIn } from "../hooks/useSignIn";
import { useNavigate } from "react-router-native";
import { authStorage } from "../utils/authStorage";
import { useState } from "react";
import { useSignUp } from "../hooks/useSignUp";

const styles = StyleSheet.create({
  container: {
    padding: 8,
    gap: 8,
  },
});

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
  passwordConfirmation: yup
    .string()
    .required("Password confirmation is required")
    .oneOf([yup.ref("password")], "Your password do not match"),
});

const SignUp = () => {
  const { handleSignUp, error } = useSignUp();

  const form = useFormik({
    initialValues: {
      username: "",
      password: "",
      passwordConfirmation: "",
    },
    onSubmit: async (values) => {
      const { username, password } = values;
      await handleSignUp(username, password);
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
      <TextInput
        placeholder="Password confirmation"
        secureTextEntry
        value={form.values.passwordConfirmation}
        onChangeText={form.handleChange("passwordConfirmation")}
        error={showError(form, "passwordConfirmation")}
      />
      {showError(form, "passwordConfirmation") && (
        <Text color="error">{form.errors.passwordConfirmation}</Text>
      )}
      {error && <Text color="error">{error}</Text>}
      <Button text="Sign up" onPress={form.handleSubmit} />
    </View>
  );
};

export default SignUp;
