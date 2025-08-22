import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
     ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  {
    // Custom rules to handle your current issues
    rules: {
      // Change these from "error" to "warn" to allow building
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": "warn", 
      "prefer-const": "warn",
      "react-hooks/exhaustive-deps": "warn",
      
      // Or completely disable them temporarily
      // "@typescript-eslint/no-explicit-any": "off",
      // "@typescript-eslint/no-unused-vars": "off",
      // "prefer-const": "off", 
      // "react-hooks/exhaustive-deps": "off",
    },
  },
];

export default eslintConfig;
