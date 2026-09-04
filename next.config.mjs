/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fonts are loaded via a <link> in the layout, so we don't need Next's
  // build-time font inlining (which requires network access at build time).
  optimizeFonts: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
