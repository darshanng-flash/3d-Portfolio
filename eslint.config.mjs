import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Next.js recommended + TypeScript rules (converted from legacy to flat)
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Project-level options
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
    },
  },
];

export default eslintConfig;
