/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['cdn.pixabay.com', 'images.pexels.com', 'images.unsplash.com'],
    // Mientras desarrollamos, permitimos imágenes sin origen específico
    unoptimized: process.env.NODE_ENV === 'development',
  },
  experimental: {
    // Optimizaciones adicionales
    optimizeCss: true,
    scrollRestoration: true,
    optimisticClientCache: true,
  },
  // Configuraciones específicas para desarrollo
  ...(process.env.NODE_ENV === 'development' && {
    webpack: (config) => {
      // Optimizaciones para webpack en desarrollo
      config.watchOptions = {
        aggregateTimeout: 300,
        poll: 1000,
      };
      return config;
    },
  }),
}

module.exports = nextConfig 