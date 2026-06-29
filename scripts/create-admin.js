/**
 * Creates the Bella Safaris admin user in Supabase Auth.
 * Run once: node scripts/create-admin.js
 *
 * Requires env vars (copy from .env.local):
 *   NEXT_PUBLIC_SUPABASE_URL
 *   SUPABASE_SERVICE_ROLE_KEY
 */
require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
  console.error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
  auth: { autoRefreshToken: false, persistSession: false },
});

(async () => {
  console.log('\nCreating admin user...\n');

  // Check if user already exists
  const { data: existing } = await supabase.auth.admin.listUsers();
  const alreadyExists = existing?.users?.some(u => u.email === 'mukabwa.dm@gmail.com');

  if (alreadyExists) {
    console.log('✓ Admin user already exists — skipping creation.');
    return;
  }

  const { data, error } = await supabase.auth.admin.createUser({
    email: 'mukabwa.dm@gmail.com',
    password: 'K9xtr3m3#4991',
    email_confirm: true,
    user_metadata: { role: 'admin', name: 'Bella Safaris Admin' },
  });

  if (error) {
    console.error('✗ Error creating admin user:', error.message);
    process.exit(1);
  }

  console.log('✅ Admin user created successfully!');
  console.log(`   ID: ${data.user?.id}`);
  console.log(`   Email: ${data.user?.email}\n`);
})();
