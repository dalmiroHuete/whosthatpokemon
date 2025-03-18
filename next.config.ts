import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: "/",
                destination: "/pokemon",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
