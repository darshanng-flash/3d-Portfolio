/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three'],
  images: {
    domains: ['github.com', 'githubusercontent.com'],
  },
}

export default nextConfig
