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
  // GitHub Pages deploys to a subdirectory, so we need to adjust the basePath
  // If you're deploying to a custom domain, you can remove this
  basePath: process.env.NODE_ENV === 'production' ? '/john-carroll-sw.github.io-yt' : '',
  // This ensures assets are referenced correctly
  assetPrefix: process.env.NODE_ENV === 'production' ? '/john-carroll-sw.github.io-yt/' : '',
}

export default nextConfig
