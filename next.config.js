const { join } = require('path')

/**
 * @type {import('next').NextConfig}
 * https://nextjs.org/docs/api-reference/next.config.js/introduction
 */
const nextConfig = {
  distDir: 'dist',

  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true
  },
  experimental: {
    appDir: false
  },

  httpAgentOptions: {
    keepAlive: false
  },

  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  sassOptions: {
    includePaths: [join(__dirname, 'src/styles')]
  },
  trailingSlash: false,

  redirects() {
    return [
      {
        source: '/',
        destination: '/browse',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
