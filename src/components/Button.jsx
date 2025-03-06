import React from "react";
import { Pressable, StyleSheet } from "react-native";
import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  colorPrimary: {
    backgroundColor: theme.colors.primary,
  },
  colorError: {
    backgroundColor: theme.colors.error,
  },
  text: {
    color: theme.colors.white,
  },
});

const Button = ({ color = "primary", text, style, ...props }) => {
  const buttonStyle = [
    styles.button,
    color === "primary" && styles.colorPrimary,
    color === "error" && styles.colorError,
    style,
  ];
  return (
    <Pressable
      style={buttonStyle}
      android_ripple={{
        color:
          color === "primary" ? theme.colors.active : theme.colors.activeError,
      }}
      {...props}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default Button;
