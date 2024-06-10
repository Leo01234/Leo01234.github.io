import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { viteBundler } from "@vuepress/bundler-vite"

export default defineUserConfig({
  // === 站点配置 ===
  base: "/",

  lang: "zh-CN", // 站点的语言
  title: "Leo01234", // 站点的标题
  description: "Blog of Leo01234", // 站点的描述

  // === 主题配置 ===
  theme,

  // === 打包工具配置 ===
  // bundler: viteBundler({
  //   viteOptions: {
  //     server: {
  //       host: "localhost" // dev服务器只监听localhost
  //     }
  //   },
  //   // vuePluginOptions: {},
  // }),

  // === Dev 配置项 ===
  host: "localhost", // dev服务器只监听localhost

  // === Build 配置项 ===
  // Enable it with pwa
  // shouldPrefetch: false,
});
