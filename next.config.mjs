/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  sassOptions: {
    includePaths: ["./src/styles"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "uhf.microsoft.com",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "www.google.com",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/wikipedia/**",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["antd", "@ant-design/icons", "framer-motion"],
  },
};

export default nextConfig;
