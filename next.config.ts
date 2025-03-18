import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: "/",
                destination: "/pokemon",
                permanent: true, // Set to true if you want a 301 permanent redirect
            },
        ];
    },
};

export default nextConfig;
