import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [reactRouter(), tsconfigPaths()],
  optimizeDeps: {
    include: [
      "@jetbrains/kotlin-web-site-ui/dist/header.js",
      "@jetbrains/kotlin-web-site-ui/dist/footer.js"
    ]
  },
  server: {
    watch: {
      ignored: ["**/build/**", "**/.git/**"],
    },
  },
  // Add this section:
  ssr: {
    noExternal: [
      "@jetbrains/kotlin-web-site-ui",
      "@rescui/card",
      "@rescui/button",
      "@rescui/checkbox",
      "@rescui/colors",
      "@rescui/icons",
      "@rescui/input",
      "@rescui/tab-list",
      "@rescui/tooltip",
      "@rescui/typography",
      "@rescui/ui-contexts"
    ],
  },
});
