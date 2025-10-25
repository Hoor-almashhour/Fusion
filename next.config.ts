import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();


const nextConfig: NextConfig = {
  images: {
  
    unoptimized: false,
    
    domains: ["localhost"],
    
    formats: ["image/avif", "image/webp"],
  },
};

export default withNextIntl(nextConfig);
