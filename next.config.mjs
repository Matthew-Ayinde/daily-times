/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "daily-times-api-30496e7c12fe.herokuapp.com",
      },
    ],
  },
};

export default nextConfig;
