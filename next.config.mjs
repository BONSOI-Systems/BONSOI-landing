/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        minimumCacheTTL: 60,
        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.youtube.com',
            },
        ],
    },
    // Enable compression for faster TTFB
    compress: true,
    // Power header for security & SEO
    poweredByHeader: false,
    // Inline critical CSS to eliminate render-blocking CSS requests
    experimental: {
        optimizeCss: true,
    },
};


export default nextConfig;
