import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  // root: "./src",
  build: {
    outDir: "../dist",
  },
  base: "/tsukutte-asobu2023/",
  plugins: [react()],
});
