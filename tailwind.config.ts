/*eslint-env node*/
import type { Config } from "tailwindcss"

/* DEV NOTE: One day it may be required to follow the Tailwind documentation

   https://tailwindcss.com/docs/content-configuration#working-with-third-party-libraries

   content: [
     "./src/** /*.{vue,js,ts}"
   ]
 */
export default {
  content: ["./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {}
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries")
  ]
} satisfies Config
