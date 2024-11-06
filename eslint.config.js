// //eslint.config.js er en konfigurasjonsfil for ESLint, som er et verktøy for å analysere og finne problemer i JavaScript- og TypeScript-kode. Den hjelper deg med å opprettholde en konsekvent kodekvalitet og kodeformat, ved å flagge potensielle feil eller avvik fra definerte regler.
// Oppsummering
// eslint.config.js hjelper deg med å:

// Opprettholde konsistent kode.
// Fange opp potensielle feil.
// Tilpasse reglene for å passe din utviklingsstil og prosjektets krav.
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import prettier from "eslint-plugin-prettier";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
  {
    ignores: ["dist", "node_modules"], // Ignorer dist og node_modules
  },
  js.configs.recommended, // Anbefalte regler for JavaScript
  {
    files: ["**/*.{ts,tsx}"], // Gjelder TypeScript-filer
    languageOptions: {
      parser: tsParser, // TypeScript-parser
      ecmaVersion: 2020,
      sourceType: "module",
      globals: globals.browser,
    },
    plugins: {
      "@typescript-eslint": tsPlugin, // Bruker TypeScript ESLint-plugin
    },
    rules: {
      ...tsPlugin.configs["recommended"].rules, // TypeScript regler
      "@typescript-eslint/no-unused-vars": ["warn"], // Advarsel for ubrukte variabler
      "@typescript-eslint/explicit-module-boundary-types": "off", // Ingen krav om returtyper
    },
  },
  {
    files: ["**/*.{jsx,tsx}"], // Gjelder React-filer
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules, // React Hooks regler
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
  {
    plugins: {
      prettier, // Prettier-plugin
    },
    rules: {
      "prettier/prettier": "warn", // Prettier regler
    },
  },
];
