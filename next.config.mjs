/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'relationshipplus.s3.ap-south-1.amazonaws.com',
            port: '',
            
          },
          {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
            port: '',
            
          },
          {
            protocol: 'https',
            hostname: 'www.freepik.com',
            port: '',
            
          },
        ],
    },
};

export default nextConfig;
