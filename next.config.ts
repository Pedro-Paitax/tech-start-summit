import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  async headers() {
    return [
      {
        source: "/embed",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors https://excalidraw.com;",
          },
          {
            key: "X-Frame-Options",
            value: "ALLOW-FROM https://excalidraw.com",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
