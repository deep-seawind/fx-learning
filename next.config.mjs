/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Disable AVIF optimization (Turbopack does not support it yet)
    formats: ["image/webp"], 
  },
};

export default nextConfig;
