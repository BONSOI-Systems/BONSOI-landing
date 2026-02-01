/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        qualities: [60, 75],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.youtube.com',
            },
        ],
    },
};

export default nextConfig;
