import react from "eslint-plugin-react";
import reactNative from "eslint-plugin-react-native";
import babelParser from "@babel/eslint-parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...compat.extends(
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jest/recommended"
  ),
  {
    plugins: {
      react,
      "react-native": reactNative,
    },

    languageOptions: {
      globals: {
        ...reactNative.environments["react-native"]["react-native"],
        fetch: true,
        process: true,
        console: true,
        setTimeout: true,
        clearTimeout: true,
      },

      parser: babelParser,
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    rules: {
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
    },
  },
  {
    ignores: ["metro.config.js"],
  },
];
