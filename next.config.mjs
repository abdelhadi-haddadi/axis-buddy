/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'n1edx68t7x.ufs.sh',
        port: '',
        pathname: '/**',
      },
    ],
  },
  output: "export"
};

export default nextConfig;
