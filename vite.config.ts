import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  // Keep public/resume.pdf as the source; give each published version its own
  // URL so browsers can cache it without hiding future resume updates.
  const resume = readFileSync(new URL("./public/resume.pdf", import.meta.url));
  const resumeHash = createHash("sha256").update(resume).digest("hex").slice(0, 12);
  const resumeFileName = `assets/resume-${resumeHash}.pdf`;

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      {
        name: "versioned-resume",
        apply: "build",
        buildStart() {
          this.emitFile({ type: "asset", fileName: resumeFileName, source: resume });
        },
      },
    ],
    define: {
      __RESUME_URL__: JSON.stringify(command === "build" ? `/${resumeFileName}` : "/resume.pdf"),
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
