/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    assetPrefix: process.env.NODE_ENV === 'production' ? '/My-Portfolio' : '',
    basePath: process.env.NODE_ENV === 'production' ? '/My-Portfolio' : '',
  };
  
  export default nextConfig;
  