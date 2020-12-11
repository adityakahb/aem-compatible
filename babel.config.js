module.exports = function (api) {
    api.cache(true);
  
    const presets = [
        [
          "@babel/preset-env", {
          "useBuiltIns": "usage",
          "corejs": "2.0.0",
          "targets": {
            "edge": "17",
            "firefox": "60",
            "chrome": "67",
            "safari": "11.1",
            "ie": "11"
          }
        }]
    ];
    const plugins = [
      [
        "@babel/plugin-proposal-class-properties"
      ]
    ];
    return {
      presets,
      plugins
    };
}