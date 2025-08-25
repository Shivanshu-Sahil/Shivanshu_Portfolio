/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  images: {
    domains: ['images.unsplash.com', 'github.com'],
    formats: ['image/webp', 'image/avif'],
  },
}

export default nextConfig