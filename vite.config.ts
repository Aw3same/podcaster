import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from 'vite-tsconfig-paths'


export default defineConfig(({ mode }) => {
  const isProduction = mode === "production";

  return {
    plugins: [react(), tsconfigPaths()],
    build: {
      minify: isProduction,
      sourcemap: !isProduction,
    },
    css: {
      devSourcemap: !isProduction,
    },
  };
});
