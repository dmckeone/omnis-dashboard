import { defineConfig } from "vite"
import { viteSingleFile } from "vite-plugin-singlefile"
import { createHtmlPlugin } from "vite-plugin-html"
import multiple from "vite-plugin-multiple"
import { fileURLToPath, URL } from "url"
import vue from "@vitejs/plugin-vue"

const isProduction = process.env.NODE_ENV === "production"

let buildExtra = {}
const pluginExtra = []
if (isProduction) {
  buildExtra = {
    ...buildExtra,
    cssCodeSplit: false,
    assetsInlineLimit: 100000000
  }
  pluginExtra.push(viteSingleFile({ removeViteModuleLoader: true }))
  pluginExtra.push(createHtmlPlugin())
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    multiple([
      {
        name: "ctrl_omnis_dashboard",
        config: "vite.json-control.config.ts"
      }
    ]),
    ...pluginExtra
  ],
  build: {
    ...buildExtra,
    rollupOptions: {
      input: {
        "omnis-dashboard": fileURLToPath(new URL("./omnis-dashboard.html", import.meta.url))
      }
    }
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  }
})
