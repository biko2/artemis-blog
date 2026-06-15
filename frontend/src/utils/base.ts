// Shared base URL for the site. Import this where needed in components/pages.
export const base = (import.meta.env.BASE_URL ?? "").replace(/\/$/, "");
export default base;
