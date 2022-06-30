module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('css')

  // Filter source file names using a glob
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("posts/*.md");
  });

  return {
    passthroughFileCopy: true
  }
}
