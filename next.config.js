/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/products/deleted_forever', // 어떤 경로로 왓어?
        destination: '/products', // 어디로 보낼거야?
        permanent: true, // 영구적으로 리다이렉트 할거야 => [308] status code
      },
      {
        source: '/products/deleted_temp', // 어떤 경로로 왓어?
        destination: '/products', // 어디로 보낼거야?
        permanent: false, // 임시로 리다이렉트하는거야, SEO야 캐시하지마
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/junsu',
        destination: '/about/me/junsu',
      },
      {
        source: '/item/:slug',
        destination: '/products/:slug',
      },
    ];
  },
};

module.exports = nextConfig;
