import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { viteBundler } from "@vuepress/bundler-vite"

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Blog Demo",
  description: "A blog demo for vuepress-theme-hope",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,

  bundler: viteBundler({
    viteOptions: {
      server: {
        host: "localhost" // dev服务器只监听localhost
      }
    },
    // vuePluginOptions: {},
  }),
});
