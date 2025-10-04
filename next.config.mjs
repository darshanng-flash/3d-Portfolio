/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD
  transpilePackages: ['three'],
  images: {
    domains: ['github.com', 'githubusercontent.com'],
  },
}

export default nextConfig
=======
  // Allow Next to transpile Three if a sub-dependency ships non-transpiled ESM
  transpilePackages: ['three'],

  images: {
    domains: ['github.com', 'githubusercontent.com'],
  },

  // Optional: silence native deps warnings in some Windows setups
  webpack: (config) => {
    config.externals = config.externals || [];
    config.externals.push({
      'utf-8-validate': 'commonjs utf-8-validate',
      'bufferutil': 'commonjs bufferutil',
    });
    return config;
  },
};

export default nextConfig;
>>>>>>> 67a0539 (WIP: local changes)
