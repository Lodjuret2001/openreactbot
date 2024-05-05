import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";
import image from "@rollup/plugin-image";
import dts from "rollup-plugin-dts";
import pkg from "./package.json" assert { type: "json" };

const resolveExtentions = {
  extensions: [".ts", ".tsx"],
};

const babelConfig = {
  extensions: [".ts", ".tsx"],
  exclude: "node_modules/**",
  presets: ["@babel/preset-typescript", "@babel/preset-react"],
  babelHelpers: "bundled",
  compact: true,
};

const externals = [
  "openai",
  "@chatscope/chat-ui-kit-react",
  "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css",
];

export default [
  // CommonJS build
  {
    input: "src/index.ts",
    output: {
      file: pkg.main,
      format: "cjs",
    },
    external: externals,
    plugins: [
      peerDepsExternal(), //Extracts peerDeps & external them
      resolve(resolveExtentions),
      babel(babelConfig), //Transforms .ts && .tsx to right outputted js
      image(), //encodes images
      terser(), //minimizes code
    ],
  },
  // ESM build
  {
    input: "src/index.ts",
    output: {
      file: pkg.module,
      format: "esm",
    },
    external: externals,
    plugins: [
      peerDepsExternal(),
      resolve(resolveExtentions),
      babel(babelConfig), //Transforms .ts && .tsx to right outputted js
      image(),
      terser(),
    ],
  },
  // UMD build
  {
    input: "src/index.ts",
    output: {
      file: "dist/umd/openreactbot-min.js",
      format: "umd",
      name: "OpenReactBot", // Global variable name for UMD bundle
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
        openai: "openai",
        "@chatscope/chat-ui-kit-react": "ChatUiKitReact",
        "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css":
          "ChatUiKitStyles",
      }, // Map external dependencies to global variables
    },
    external: externals,
    plugins: [
      peerDepsExternal(),
      resolve(resolveExtentions),
      babel(babelConfig),
      image(),
      terser(),
    ],
  },
  // .d.ts bundle build
  {
    input: "src/index.ts",
    output: [{ file: "dist/cjs/index.d.ts", format: "es" }],
    external: externals,
    plugins: [dts()],
  },
  {
    input: "src/index.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    external: externals,
    plugins: [dts()],
  },
  {
    input: "src/index.ts",
    output: [{ file: "dist/umd/index.d.ts", format: "es" }],
    external: externals,
    plugins: [dts()],
  },
];
