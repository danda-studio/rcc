import antfu from "@antfu/eslint-config";
import nextPlugin from "@next/eslint-plugin-next";
import betterTailwind from "eslint-plugin-better-tailwindcss";

console.log(betterTailwind.configs.recommended.rules["better-tailwindcss/multiline"]);

export default antfu(
  {
    react: true,
    typescript: true,

    lessOpinionated: true,
    isInEditor: false,

    stylistic: {
      indent: 2,
      quotes: "double",
      semi: true,
    },

    formatters: true,

    ignores: [
      "migrations/**/*",
      "global.d.ts",
      "next-env.d.ts",
      "./src/shared/api/scheme/**/*",
    ],
  },
  {
    plugins: {
      "@next/next": nextPlugin,
      "better-tailwindcss": betterTailwind,
    },
    settings: {
      "better-tailwindcss": {
        entryPoint: "src/shared/styles/globals.css",
        lineBreakStyle: "auto",
      },
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      ...betterTailwind.configs.recommended.rules,
      "better-tailwindcss/enforce-consistent-line-wrapping": [
        "warn",
        {
          lineBreakStyle: "windows",
        },
      ],
      "better-tailwindcss/no-unregistered-classes": "off",
    },
  },
  {
    rules: {
      "antfu/no-top-level-await": "off",
      "style/brace-style": ["error", "1tbs"],
      "node/prefer-global/process": "off",
    },
  },
);
