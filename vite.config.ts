import { defineConfig } from "vite"
import { viteSingleFile } from "vite-plugin-singlefile"
import { createHtmlPlugin } from "vite-plugin-html"
import multiple from "vite-plugin-multiple"
import { fileURLToPath, URL } from "url"
import vue from "@vitejs/plugin-vue"
import tailwindcss from "@tailwindcss/vite"

const isProduction = process.env.NODE_ENV === "production"
const isHistoire = process.env.HISTOIRE != null ? process.env.HISTOIRE : false

let buildExtra = {}
const pluginExtra = []
if (isProduction && !isHistoire) {
  buildExtra = {
    ...buildExtra,
    rollupOptions: {
      input: {
        "omnis-dashboard": fileURLToPath(new URL("./omnis-dashboard.html", import.meta.url))
      }
    },
    cssCodeSplit: false,
    assetsInlineLimit: 100000000
  }
  pluginExtra.push(viteSingleFile({ removeViteModuleLoader: true }))
  pluginExtra.push(createHtmlPlugin())
  pluginExtra.push(
    multiple([
      {
        name: "ctrl_omnis_dashboard",
        config: "vite.json-control.config.ts"
      }
    ])
  )
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss(), ...pluginExtra],
  build: {
    ...buildExtra
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  }
})
