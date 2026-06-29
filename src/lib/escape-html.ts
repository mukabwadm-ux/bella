const MAP: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#x27;",
  "/": "&#x2F;",
};

export function escapeHtml(str: string | undefined | null): string {
  if (!str) return "";
  return String(str).replace(/[&<>"'/]/g, (ch) => MAP[ch]);
}
