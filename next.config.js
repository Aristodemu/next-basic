/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "oss.perhaps.site",
        port: "",
        pathname: "/other/**",
      },
    ],
  },
};

module.exports = nextConfig;
