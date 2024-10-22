// @ts-check
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/video/:videoId",
        destination: "/video/:videoId",
      },
    ];
  },
};

export default nextConfig;
