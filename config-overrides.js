const { injectBabelPlugin } require('react-app-rewired')


module.exports = config => injectBabelPlugin([
  "root-import",
  {
    rootPathPrefix: "~",
    rootPathSuffix: "src"
  }, config);
