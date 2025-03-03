import { useFormik } from "formik";
import React from "react";
import { StyleSheet, View } from "react-native";
import * as yup from "yup";
import { useSignIn } from "../hooks/useSignIn";
import Button from "./Button";
import Text from "./Text";
import TextInput from "./TextInput";
import { useApolloClient } from "@apollo/client";
import { useNavigate } from "react-router-native";
import { authStorage } from "../utils/authStorage";

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

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();
  const apolloClient = useApolloClient();

  const form = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      const { username, password } = values;
      try {
        const { data } = await signIn({
          variables: { credentials: { username, password } },
        });
        const token = data.authenticate.accessToken;
        authStorage.setAccessToken(token);
        apolloClient.resetStore();
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    },
    validationSchema,
  });

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Username"
        value={form.values.username}
        onChangeText={form.handleChange("username")}
        error={!!form.errors.username}
      />
      {form.touched.username && form.errors.username && (
        <Text color="error">{form.errors.username}</Text>
      )}
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={form.values.password}
        onChangeText={form.handleChange("password")}
        error={!!form.errors.password}
      />
      {form.touched.password && form.errors.password && (
        <Text color="error">{form.errors.password}</Text>
      )}
      <Button text="Sign in" onPress={form.handleSubmit} />
    </View>
  );
};

export default SignIn;
