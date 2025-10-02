/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains: ['avatars.githubusercontent.com'],
        remotePatterns:[
            {
                protocol: "https",
                hostname:"cdn.dummyjson.com",
            }, 
            {
                protocol: "https",
                hostname:"avaters.githubusercontent.com",
            },
            {
                protocol: "https",
                hostname:"lh3.googleusercontent.com",
            },
            {
                protocol: "https",
                hostname:"i.ibb.co.com",
            },
        ]
    }
};

export default nextConfig;
