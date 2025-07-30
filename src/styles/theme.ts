import {
  defineConfig,
} from "@chakra-ui/react"

export const themeConfig = defineConfig({
  globalCss: {
    "html, body": {
      backgroundColor: "red"
    }
  },
  theme: {
    tokens: {
      colors: {},
    },
  },
})
