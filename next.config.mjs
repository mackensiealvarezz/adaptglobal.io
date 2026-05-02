/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'adaptglobal.io' },
      { protocol: 'https', hostname: 'adaptglobal.wpenginepowered.com' },
    ],
  },
};

export default nextConfig;
