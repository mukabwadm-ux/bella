-- ============================================================
-- Bella Safaris — Database Schema
-- ============================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ─── DESTINATIONS ────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS destinations (
  id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug            TEXT UNIQUE NOT NULL,
  name            TEXT NOT NULL,
  country         TEXT NOT NULL,
  region          TEXT NOT NULL,
  short_description TEXT NOT NULL,
  long_description  TEXT DEFAULT '',
  hero_image      TEXT NOT NULL,
  best_time       TEXT DEFAULT '',
  climate         TEXT DEFAULT '',
  highlights      TEXT[] DEFAULT '{}',
  about           TEXT DEFAULT '',
  featured        BOOLEAN DEFAULT false,
  created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- ─── TOURS ───────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS tours (
  id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug            TEXT UNIQUE NOT NULL,
  title           TEXT NOT NULL,
  summary         TEXT NOT NULL,
  hero_image      TEXT NOT NULL,
  duration        INTEGER NOT NULL,
  group_size      TEXT NOT NULL,
  price_from_kes  INTEGER NOT NULL,
  difficulty      TEXT CHECK (difficulty IN ('easy','moderate','challenging')) DEFAULT 'easy',
  category        TEXT NOT NULL,
  destinations    TEXT[] DEFAULT '{}',
  highlights      TEXT[] DEFAULT '{}',
  itinerary       JSONB DEFAULT '[]',
  inclusions      TEXT[] DEFAULT '{}',
  exclusions      TEXT[] DEFAULT '{}',
  gallery         TEXT[] DEFAULT '{}',
  faqs            JSONB DEFAULT '[]',
  featured        BOOLEAN DEFAULT false,
  best_seller     BOOLEAN DEFAULT false,
  created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- ─── BLOG POSTS ──────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS blog_posts (
  id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug            TEXT UNIQUE NOT NULL,
  title           TEXT NOT NULL,
  excerpt         TEXT NOT NULL,
  content         TEXT DEFAULT '',
  cover_image     TEXT NOT NULL,
  category        TEXT NOT NULL,
  tags            TEXT[] DEFAULT '{}',
  author          TEXT DEFAULT 'Bella Safaris Team',
  featured        BOOLEAN DEFAULT false,
  published_at    TIMESTAMPTZ DEFAULT NOW(),
  created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- ─── TESTIMONIALS ────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS testimonials (
  id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name            TEXT NOT NULL,
  rating          INTEGER CHECK (rating BETWEEN 1 AND 5) DEFAULT 5,
  body            TEXT NOT NULL,
  trip_type       TEXT DEFAULT '',
  source          TEXT DEFAULT 'Google',
  featured        BOOLEAN DEFAULT true,
  created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- ─── ENQUIRIES ───────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS enquiries (
  id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tour_slug       TEXT,
  name            TEXT NOT NULL,
  email           TEXT NOT NULL,
  phone           TEXT NOT NULL,
  travel_date     DATE,
  group_size      TEXT DEFAULT '2',
  message         TEXT DEFAULT '',
  subject         TEXT DEFAULT '',
  source          TEXT DEFAULT 'tour_page',
  status          TEXT CHECK (status IN ('new','contacted','quoted','booked','closed')) DEFAULT 'new',
  created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- ─── ROW LEVEL SECURITY ──────────────────────────────────────

ALTER TABLE destinations   ENABLE ROW LEVEL SECURITY;
ALTER TABLE tours          ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts     ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials   ENABLE ROW LEVEL SECURITY;
ALTER TABLE enquiries      ENABLE ROW LEVEL SECURITY;

-- Public can READ destinations, tours, blog_posts, testimonials
CREATE POLICY "Public read destinations"  ON destinations  FOR SELECT USING (true);
CREATE POLICY "Public read tours"         ON tours         FOR SELECT USING (true);
CREATE POLICY "Public read blog_posts"    ON blog_posts    FOR SELECT USING (true);
CREATE POLICY "Public read testimonials"  ON testimonials  FOR SELECT USING (true);

-- Enquiries: only INSERT (from server-side API, using service role)
-- No public SELECT — only admins via service role key can read
CREATE POLICY "Service role insert enquiries" ON enquiries FOR INSERT WITH CHECK (true);

-- ─── INDEXES ─────────────────────────────────────────────────
CREATE INDEX IF NOT EXISTS idx_tours_featured      ON tours (featured);
CREATE INDEX IF NOT EXISTS idx_tours_category      ON tours (category);
CREATE INDEX IF NOT EXISTS idx_destinations_slug   ON destinations (slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug     ON blog_posts (slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_featured ON blog_posts (featured);
CREATE INDEX IF NOT EXISTS idx_enquiries_status    ON enquiries (status);
CREATE INDEX IF NOT EXISTS idx_enquiries_created   ON enquiries (created_at DESC);
