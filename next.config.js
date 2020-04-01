// Example config for adding a loader that depends on babel-loader
// This source was taken from the @next/mdx plugin source:
// https://github.com/zeit/next.js/tree/canary/packages/next-mdx
module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: 'svg-inline-loader',
        },
      ],
    })
    return config
  },
}
