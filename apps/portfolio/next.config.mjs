import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  experimental: {
    turbo: {
      resolveAlias: {
        "@weaw/design": path.resolve(
          __dirname,
          "../../packages/weaw-design/src"
        ),
      },
    },
  },
};

export default nextConfig;
