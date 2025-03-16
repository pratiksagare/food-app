/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'orderserv-kfc-assets.yum.com',

        }, {
            protocol: 'https',
            hostname: 'media-assets.swiggy.com',
        }],
    },
    devIndicators: false
};

export default nextConfig;
