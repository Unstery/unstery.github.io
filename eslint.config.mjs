import { defineConfig, globalIgnores } from "eslint/config";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([
    globalIgnores(["**/*.js", "**/*.cjs", "**/*.json", "**/*.md", "**/*.sh", "**/*.yml"]),
    {
        extends: compat.extends(
            "eslint:recommended",
            "plugin:@typescript-eslint/recommended",
            "plugin:react/recommended",
        ),

        plugins: {
            "@typescript-eslint": typescriptEslint,
        },

        languageOptions: {
            parser: tsParser,
            ecmaVersion: 5,
            sourceType: "module",

            parserOptions: {
                tsconfigRootDir: "C:\\Users\\fst09\\Documents\\portfolio",
                project: ["./tsconfig.json"],
            },
        },

        rules: {
            "react/react-in-jsx-scope": 0,
            "react/require-default-props": 0,
            "react/function-component-definition": 0,
            "import/prefer-default-export": 0,
            "react/jsx-props-no-spreading": 0,
            "comma-dangle": 0,
            "@typescript-eslint/comma-dangle": 0,
            radix: 0,
        },
    },
]);