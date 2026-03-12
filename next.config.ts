
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  // Eliminamos 'output: export' para que Vercel pueda ejecutar Server Actions y funciones de IA
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
};

export default nextConfig;
