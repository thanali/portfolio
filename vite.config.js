import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "/assets": "./src/assets",
      "@pdf": "./src/assets/ResumeFR_2023.pdf"
    }
  }
})
