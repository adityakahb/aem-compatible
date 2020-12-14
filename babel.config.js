module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      "@babel/preset-env", {
        modules: false,
        useBuiltIns: 'usage',
        corejs: 3,
      }
    ]
  ];
  const plugins = [
    [
      '@babel/plugin-transform-runtime', {
        helpers: true,
        regenerator: true,
        useESModules: false
      }
    ]
  ];
  return {
    presets,
    plugins
  };
}