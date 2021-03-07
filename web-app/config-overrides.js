module.exports = function override(config, env) {
    //do stuff with the webpack config...
    const fontLoader = { test: /\.(woff|woff2|eot|ttf)$/, loader: 'url-loader?limit=100000' };
    config.module.rules[1].oneOf.push(fontLoader);
    console.log(config.module.rules[1]);
    return config;
  }