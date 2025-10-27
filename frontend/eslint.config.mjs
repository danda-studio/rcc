import antfu from "@antfu/eslint-config";
import nextPlugin from "@next/eslint-plugin-next";
import betterTailwind from "eslint-plugin-better-tailwindcss";

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
      "better-tailwind": betterTailwind,
    },
    settings: {
      "better-tailwind": {
        entryPoint: "src/shared/styles/global.css",
      },
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      "better-tailwind/no-duplicate-classes": "error",
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
