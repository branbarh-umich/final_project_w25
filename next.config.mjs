/** @type {import('next').NextConfig} */

// Thanks to https://www.reddit.com/r/nextjs/comments/1ixfypv/nextjs_on_github_pages/
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  distDir: "dist",
  basePath: isProd ? "/final_project_w25" : "",
  // assetPrefix: isProd ? "/final_project_w25/" : "",
  images: { unoptimized: true }
};

export default nextConfig;
