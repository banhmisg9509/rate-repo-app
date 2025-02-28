import React from "react";
import { View, StyleSheet } from "react-native";
import TextInput from "./TextInput";
import Button from "./Button";
import Text from "./Text";
import { useFormik } from "formik";
import * as yup from "yup";
import theme from "../theme";

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
  const form = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
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
