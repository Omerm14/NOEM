import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  // Branded 404 across both root layouts (he + en) — see app/global-not-found.tsx
  experimental: { globalNotFound: true },
};

export default nextConfig;
