import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

<<<<<<< HEAD

const nextConfig: NextConfig = {
  images: {
  
    unoptimized: false,
    
    domains: ["localhost"],
    
    formats: ["image/avif", "image/webp"],
  },
};
=======
const nextConfig: NextConfig = {};
>>>>>>> origin/main

export default withNextIntl(nextConfig);
