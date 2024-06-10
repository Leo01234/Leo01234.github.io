import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/post/": "structure",

  // fallback
  "/": "structure",
  // "/": [
  //   "",
  //   {
  //     text: "Post",
  //     icon: "pen-to-square",
  //     prefix: "post/",
  //     children: "structure",
  //   },
    // {
    //   text: "Demo",
    //   icon: "laptop-code",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    // {
    //   text: "Articles",
    //   icon: "book",
    //   prefix: "posts/",
    //   children: "structure",
    // },
    // "intro",
    // {
    //   text: "Slides",
    //   icon: "person-chalkboard",
    //   link: "https://plugin-md-enhance.vuejs.press/guide/content/revealjs/demo.html",
    // },
  // ],
});
