/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shibe.online',
        port: '',
        pathname: '/shibes/**',
      }
    ]
  }
}

module.exports = nextConfig
