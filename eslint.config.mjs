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

export default [{
    ignores: [
        "**/node_modules",
        "**/package-lock.json",
        "**/documentation",
        "**/e2e",
        "src/setupJest.ts",
        "src/jestGlobalMocks.ts",
        "src/environments",
    ],
}, {
    files: ["**/*.js"],

    languageOptions: {
        ecmaVersion: 2018,
        sourceType: "script",
    },
}, ...compat.extends(
    "plugin:@angular-eslint/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
).map(config => ({
    ...config,
    files: ["**/*.ts"],
})), {
    files: ["**/*.ts"],

    languageOptions: {
        ecmaVersion: 5,
        sourceType: "script",

        parserOptions: {
            project: ["tsconfig.*?.json"],
            createDefaultProgram: true,
        },
    },

    rules: {
        "@angular-eslint/component-class-suffix": ["error", {
            suffixes: ["Component", "Page"],
        }],

        "@angular-eslint/directive-selector": ["error", {
            type: "attribute",
            prefix: "app",
            style: "camelCase",
        }],

        "@angular-eslint/component-selector": ["error", {
            type: "element",
            prefix: "app",
            style: "kebab-case",
        }],
    },
}, ...compat.extends("plugin:@angular-eslint/template/recommended").map(config => ({
    ...config,
    files: ["**/*.html"],
})), ...compat.extends("plugin:@angular-eslint/template/process-inline-templates").map(config => ({
    ...config,
    files: ["**/*.component.ts"],
}))];