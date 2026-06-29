const { Client } = require('pg');
const fs = require('fs');
const path = require('path');

// Use individual params to avoid URL-encoding issues with special chars in password
const config = {
  host: 'db.bomdzcpoyeebfxtqwnuh.supabase.co',
  port: 5432,
  database: 'postgres',
  user: 'postgres',
  password: 'K9xtr3m3#4991',
  ssl: { rejectUnauthorized: false },
};

async function run(file) {
  const client = new Client(config);
  await client.connect();
  console.log('Connected to Supabase database');

  const sql = fs.readFileSync(path.join(__dirname, file), 'utf8');

  // Split on semicolons and run each statement individually to get cleaner errors
  const statements = sql
    .split(';')
    .map(s => s.trim())
    .filter(s => s.length > 0 && !s.startsWith('--'));

  let ok = 0;
  for (const stmt of statements) {
    try {
      await client.query(stmt);
      ok++;
    } catch (err) {
      // Ignore "already exists" type errors — idempotent re-runs
      if (err.code === '42P07' || err.code === '42710' || err.message.includes('already exists')) {
        ok++;
      } else {
        console.error('Error:', err.message);
        console.error('Statement:', stmt.substring(0, 120));
      }
    }
  }

  console.log(`Done — ${ok}/${statements.length} statements executed successfully`);
  await client.end();
}

(async () => {
  const target = process.argv[2] || 'schema.sql';
  await run(target);
})();
