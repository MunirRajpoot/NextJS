/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["images.pexels.com"]
    },
    redirects: async () => {
        return [
            {
                source: '/redirection',
                destination: '/',
                permanent: false
            }
        ]
    }
};

export default nextConfig;
