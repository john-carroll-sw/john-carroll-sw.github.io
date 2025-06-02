/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Since your repo is john-carroll-sw.github.io, it should serve from root
  // Remove basePath and assetPrefix for root domain
  trailingSlash: true,
}

export default nextConfig
