import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// For GitHub Pages, this is fine as-is since we use HashRouter.
// If you deploy under a subpath, you can set base: "/REPO_NAME/".
export default defineConfig({
  plugins: [react()],
});
