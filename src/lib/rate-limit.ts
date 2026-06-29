// Simple in-memory rate limiter — provides basic protection against spam/abuse.
// Not shared across serverless instances; for stricter limits use Upstash Redis.

interface Entry { count: number; resetAt: number }
const store = new Map<string, Entry>();

export function rateLimit(
  key: string,
  limit = 10,
  windowMs = 60 * 60 * 1000 // 1 hour
): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const entry = store.get(key);

  if (!entry || now > entry.resetAt) {
    store.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, remaining: limit - 1 };
  }

  if (entry.count >= limit) {
    return { allowed: false, remaining: 0 };
  }

  entry.count++;
  return { allowed: true, remaining: limit - entry.count };
}

// Prune expired entries periodically to avoid memory leaks
setInterval(() => {
  const now = Date.now();
  store.forEach((entry, key) => {
    if (now > entry.resetAt) store.delete(key);
  });
}, 10 * 60 * 1000); // every 10 minutes
