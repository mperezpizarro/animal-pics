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
      }, 
      {
        protocol: 'https',
        hostname: 'random-d.uk',
        port: '',
        pathname: '/api/**'
      },
      {
        protocol: 'https',
        hostname: 'randomfox.ca',
        port: '',
        pathname: '/images/**'
      }
    ]
  }
}

module.exports = nextConfig
