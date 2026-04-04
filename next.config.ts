import type { NextConfig } from "next";

/** GitHub Pages project URLs are /repo-name/ — set NEXT_PUBLIC_BASE_PATH to the repo name in CI. */
function normalizeBasePath(raw: string | undefined): string | undefined {
  const t = raw?.trim();
  if (!t || t === "/") return undefined;
  return t.startsWith("/") ? t : `/${t}`;
}

const basePath = normalizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH);

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
};

export default nextConfig;
