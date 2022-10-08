/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // add to hot reaload work... windows
  // bug om depoiment... but in local this help to make hot reload works
  // webpackDevMiddleware: config => {
  //   config.watchOptions = {
  //     poll: 800,
  //     aggregateTimeout: 300,
  //   }
  //   return config
  // },
}

module.exports = nextConfig
