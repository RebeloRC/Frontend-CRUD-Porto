/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    backendUrl: "http://localhost:8080/movimentacao"
  },
}

module.exports = nextConfig
