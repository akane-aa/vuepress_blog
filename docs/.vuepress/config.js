module.exports = {
  title: "avelog95",
  description: "日々のキロク",
  plugins: [
    "@vuepress/blog",
    {
      /* options */
      // Unique ID of current classification
      id: "post",
      // Target directory
      dirname: "_posts",
      // Path of the `entry page` (or `list page`)
      path: "/"
    }
  ]
};
