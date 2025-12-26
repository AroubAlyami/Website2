import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// IMPORTANT: For GitHub Pages project sites (username.github.io/REPO_NAME)
// set base to "/REPO_NAME/" exactly.
//
// Replace YOUR_REPO_NAME below with your repo name.
export default defineConfig({
  base: "/Website2/",
  plugins: [react()],
});
