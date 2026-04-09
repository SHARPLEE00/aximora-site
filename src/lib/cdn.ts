// Video CDN base URL — change this when R2 public domain is ready
// Local: "" (uses /videos/xxx.mp4 from public folder)
// R2: "https://pub-xxxxx.r2.dev" (Cloudflare R2 public URL)
// Custom: "https://cdn.aximora.co" (custom domain on R2)

export const CDN_BASE = process.env.NEXT_PUBLIC_CDN_URL || "https://pub-0a641e7a81224930bb61e8e561977175.r2.dev";

export function videoUrl(filename: string): string {
  return `${CDN_BASE}/videos/${filename}`;
}
