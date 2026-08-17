/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Placeholder images are local SVGs (see /public/placeholders). next/image
    // passes SVGs through rather than raster-optimizing them, so we opt in here.
    // When real photography is added as raster files (jpg/webp), these SVG-specific
    // flags can stay — they only affect SVG handling — or be removed.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // TODO: if real photos are hosted on an external CDN, add remotePatterns here.
  },
};

export default nextConfig;
