/** @type {import('next').NextConfig} */
const nextConfig = {
  // swcMinify: true,
  reactStrictMode: false,
  // output: 'export'
  images: {
    // unoptimized: true
    domains:['api.visionvertex.com','localhost']
  }
};

module.exports = nextConfig;
