/** @type {import('next').NextConfig} */

const hostnames = [
  "daily-times-api-30496e7c12fe.herokuapp.com",
  "daily-times-media-uploads.s3.eu-west-2.amazonaws.com",
];

const nextConfig = {
  images: {
    remotePatterns: hostnames.map((hostname) => ({
      protocol: "https",
      hostname,
    })),
  },
};

export default nextConfig;