import { defineConfig } from "vite";

export default defineConfig({
  base: "/browser-extensions-manager-ui-main/",
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
      },
    },
  },
});
