import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "/assets": "./src/assets",
      "@pdffr": "./src/assets/ResumeFR_2023_v2.pdf",
      "@pdfeng": "./src/assets/ResumeENG_2023_v2.pdf"
    }
  }
})
