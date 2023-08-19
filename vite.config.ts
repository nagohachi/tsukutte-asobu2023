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
      includeAssets: ["apple-touch-icon.png"],
      manifest: {
        theme_color: "#8E2A66",
        background_color: "#8E2A66",
        display: "fullscreen",
        scope: "/tsukutte-asobu2023/",
        start_url: "/tsukutte-asobu2023/",
        name: "\u868a\u30f3\u5fcd\u5177",
        description:
          "\u30e2\u30fc\u30eb\u30b9\u4fe1\u53f7\u3068\u30e2\u30b9\u30ad\u30fc\u30c8\u97f3\u3092\u7d44\u307f\u5408\u308f\u305b\u305f\u901a\u4fe1\u6a5f\u80fd\u3068\u3001\u5468\u56f2\u306e\u53d7\u9a13\u8005\u3078\u306e\u59a8\u5bb3\u6a5f\u80fd\u3092\u5099\u3048\u305f\u30ab\u30f3\u30cb\u30f3\u30b0\u30a2\u30d7\u30ea",
        short_name: "\u868a\u30f3\u5fcd\u5177",
        icons: [
          {
            src: "/icon-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/icon-256x256.png",
            sizes: "256x256",
            type: "image/png"
          },
          {
            src: "/icon-384x384.png",
            sizes: "384x384",
            type: "image/png"
          },
          {
            src: "/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      }
    })
  ]
});
