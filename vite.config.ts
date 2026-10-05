import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => {
  // Version the URL while serving the single PDF from public.
  const resume = readFileSync(new URL("./public/Umair-Qidwai-Resume.pdf", import.meta.url));
  const resumeHash = createHash("sha256").update(resume).digest("hex").slice(0, 12);

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react()],
    define: {
      __RESUME_URL__: JSON.stringify(`/Umair-Qidwai-Resume.pdf?v=${resumeHash}`),
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
