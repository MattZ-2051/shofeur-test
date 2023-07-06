/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/locations',
        permanent: true
      }
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com'
      },
      {
        protocol: 'https',
        hostname: 'external-content.duckduckgo.com'
      },
      {
        protocol: 'https',
        hostname: 'mdbcdn.b-cdn.net'
      },
      { protocol: 'https', hostname: 'tecdn.b-cdn.net' },
      { protocol: 'https', hostname: 'images.unsplash.com' }
    ]
  }
};

module.exports = nextConfig;
