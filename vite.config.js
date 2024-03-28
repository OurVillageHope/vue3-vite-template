import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
        additionalData: '@import "/src/assets/style/scssUtils/viewport.scss";',
      },
    },
  },
  /* proxy: {
    // 带选项写法：http://localhost:5173/api/bar -> http://jsonplaceholder.typicode.com/bar
    "/api": {
      target: "http://jsonplaceholder.typicode.com",
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ""),
    },
    // 正则表达式写法：http://localhost:5173/fallback/ -> http://jsonplaceholder.typicode.com/
    "^/fallback/.*": {
      target: "http://jsonplaceholder.typicode.com",
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/fallback/, ""),
    },
  },*/
});
