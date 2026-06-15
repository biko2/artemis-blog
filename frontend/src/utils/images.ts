export function localImg(src: string, base: string): string {
  if (!src) return "";
  const cleanBase = base.replace(/\/$/, "");
  const path = src.replace(/^https?:\/\/[^/]+(\/images\/)/, "$1");
  if (path.startsWith("/images/")) {
    return `${cleanBase}${path}`;
  }

  return path;
}

export function absoluteImg(
  src: string,
  site: string | URL | undefined,
  base: string,
): string {
  if (!src) return "";
  const local = localImg(src, base);

  // If it's already absolute (e.g. external link), return as is
  if (/^https?:\/\//.test(local)) return local;

  const cleanSite = (site?.toString() ?? "").replace(/\/$/, "");
  return `${cleanSite}${local}`;
}
