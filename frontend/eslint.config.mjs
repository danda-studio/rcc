import antfu from "@antfu/eslint-config";
import nextPlugin from "@next/eslint-plugin-next";
import readableTailwind from "eslint-plugin-readable-tailwind";

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
      "readable-tailwind": readableTailwind,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      "readable-tailwind/multiline": ["error", {
        classesPerLine: 1,
        lineBreakStyle: "windows",
      }],
      "readable-tailwind/no-duplicate-classes": "error",
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
