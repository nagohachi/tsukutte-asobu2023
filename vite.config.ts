import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  // root: "./src", 今回は直下に index.html があるため不要
  build: {
    outDir: "./dist"
  },
  base: "/tsukutte-asobu2023/",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        icons: [
          {
            src: "/pwaicon.png",
            sizes: "144x144",
            type: "image/png"
          }
        ]
      }
    })
  ]
});
