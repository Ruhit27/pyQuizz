import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "encrypted-tbn0.gstatic.com",
      "pyseek.com",
      "media.geeksforgeeks.org",
      "encrypted-tbn0.gstatic.com",
      "image.spreadshirtmedia.net",
      "assets.aceternity.com",
    ], // Add other image domains here
  },
};

export default nextConfig;
