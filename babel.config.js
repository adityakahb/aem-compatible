module.exports = function (api) {
    api.cache(true);
  
    const presets = [
        ["@babel/preset-env", {
          "useBuiltIns": "usage",
          "corejs": "2.0.0",
          "targets": "> .5% or last 2 versions"
        }]
    ];
    return {
      presets
    };
}