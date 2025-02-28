import React from "react";
import { Pressable, StyleSheet } from "react-native";
import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: theme.colors.white,
  },
});

const Button = ({ children, text, ...props }) => {
  return (
    <Pressable
      style={styles.button}
      {...props}
      android_ripple={{
        color: theme.colors.active,
      }}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default Button;
