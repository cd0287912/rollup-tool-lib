import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import externals from "rollup-plugin-node-externals";

export default [
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.d.ts",
      format: "es",
    },
    plugins: [externals(), dts()],
  },
  {
    input: "src/index.ts",
    output: {
      dir: "dist/esm",
      format: "es",
      generatedCode: {
        constBindings: true,
      },
      preserveModules: true,
      strict: true,
      entryFileNames: "[name].mjs",
      sourcemap: true,
    },
    plugins: [
      externals(),
      typescript({
        noEmitOnError: true,
        outDir: "dist/esm",
        removeComments: true,
      }),
    ],
  },
];
