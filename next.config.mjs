/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isProd ? "/final_project_w25" : "",
  assetPrefix: isProd ? "/final_project_w25/" : "",
  images: { unoptimized: true }
};

export default nextConfig;
