/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  experimental: {},
  async redirects() {
    return [
      // legacy URL param 형태도 인터셉터
      {
        source: "/",
        has: [{ type: "query", key: "lang", value: "en" }],
        destination: "/en",
        permanent: true,
      },
      // /ko -> 한국어 기본 주소(/)로 이동
      { source: "/ko", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
