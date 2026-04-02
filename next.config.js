/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Helpful for static exports or if sharp is not available
  },
}

module.exports = nextConfig
