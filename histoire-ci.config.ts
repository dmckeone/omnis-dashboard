import config from "./histoire.config"

// Override to build with proper prefix for CI builds
config.vite = config.vite ?? {}
config.vite.base = "/omnis-dashboard/"

// Use hash based router mode
// https://github.com/histoire-dev/histoire/blob/main/packages/histoire-app/src/app/router.ts#L7
config.routerMode = "hash"

export default config
