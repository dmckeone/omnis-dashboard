import { defineConfig } from "histoire"
import { HstVue } from "@histoire/plugin-vue"

export default defineConfig({
  plugins: [HstVue()],
  setupFile: "./src/histoire.ts",
  // DEV NOTE: If you *do not* use viteNodeInlineDeps then this issue could occur:
  //           https://github.com/histoire-dev/histoire/issues/696
  viteNodeInlineDeps: [/@heroicons.+/]
})
