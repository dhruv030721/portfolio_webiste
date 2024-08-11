/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: ".next",
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.hbpateldiploma.org'
            },
            {
                protocol: 'https',
                hostname: 'encrypted-tbn0.gstatic.com'
            },
            {
                protocol: 'https',
                hostname: 'miro.medium.com'
            },
            {
                protocol: 'https',
                hostname: 'slideserve.com'
            },
            {
                protocol: 'https',
                hostname: 'media.licdn.com'
            }
        ]
    }
};

export default nextConfig;
