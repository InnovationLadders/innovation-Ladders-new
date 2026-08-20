/*
# Create submissions table for incoming forms/messages

1. New Tables
- `submissions`
- `id` (uuid, primary key, auto-generated)
- `form_type` (text, not null) - which form submitted (contact, competition, graduation, gulfhat, odoo, pickup, proads, other)
- `name` (text, nullable) - submitter full name
- `phone` (text, nullable) - submitter phone
- `email` (text, nullable) - submitter email
- `subject` (text, nullable) - subject line / title
- `message` (text, nullable) - main message / description
- `details` (jsonb, nullable) - all other variable fields specific to each form
- `created_at` (timestamptz, default now()) - submission timestamp
2. Security
- Enable RLS on `submissions`.
- INSERT policy for anon+authenticated: anyone visiting the public site can submit forms (no sign-in required to send a message).
- SELECT/UPDATE/DELETE policies restricted to authenticated users only: only the logged-in admin can view and manage submissions.
3. Notes
- This is a single-admin setup: the site has no public sign-up, only the admin logs in to view submissions.
- The `details` jsonb column stores form-specific fields (e.g. competition criteria, product options) so all forms share one table.
*/

CREATE TABLE IF NOT EXISTS submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  form_type text NOT NULL,
  name text,
  phone text,
  email text,
  subject text,
  message text,
  details jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_submissions" ON submissions;
CREATE POLICY "anon_insert_submissions"
ON submissions FOR INSERT
TO anon, authenticated
WITH CHECK (true);

DROP POLICY IF EXISTS "auth_select_submissions" ON submissions;
CREATE POLICY "auth_select_submissions"
ON submissions FOR SELECT
TO authenticated
USING (true);

DROP POLICY IF EXISTS "auth_update_submissions" ON submissions;
CREATE POLICY "auth_update_submissions"
ON submissions FOR UPDATE
TO authenticated
USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_delete_submissions" ON submissions;
CREATE POLICY "auth_delete_submissions"
ON submissions FOR DELETE
TO authenticated
USING (true);

CREATE INDEX IF NOT EXISTS submissions_created_at_idx ON submissions (created_at DESC);
CREATE INDEX IF NOT EXISTS submissions_form_type_idx ON submissions (form_type);
