-- ====================================================================
-- EDUQUEST SAT PLATFORM — SUPABASE ROW LEVEL SECURITY (RLS) MIGRATION
-- Fixes P0 Security Vulnerability: Anonymous Read/Write Access Exposure
-- ====================================================================

-- 1. Enable RLS on all student result, attempt, and profile tables
ALTER TABLE IF EXISTS sat_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS sat_topic_report ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS sat_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS sat_signup ENABLE ROW LEVEL SECURITY;

-- 2. Drop any existing permissive or conflicting policies
DROP POLICY IF EXISTS "Public read access" ON sat_results;
DROP POLICY IF EXISTS "Public read access" ON sat_topic_report;
DROP POLICY IF EXISTS "Public read access" ON profiles;
DROP POLICY IF EXISTS "Public read access" ON sat_registrations;
DROP POLICY IF EXISTS "Allow student read own results" ON sat_results;
DROP POLICY IF EXISTS "Allow student insert results" ON sat_results;
DROP POLICY IF EXISTS "Allow student read own topic reports" ON sat_topic_report;
DROP POLICY IF EXISTS "Allow student insert topic reports" ON sat_topic_report;
DROP POLICY IF EXISTS "Allow student read own profile" ON profiles;
DROP POLICY IF EXISTS "Allow student update own profile" ON profiles;

-- 3. POLICIES FOR sat_results (Full Mock Exams)
-- Students can only read attempts matching their authenticated user ID or email
CREATE POLICY "Allow student read own results" ON sat_results
  FOR SELECT
  TO authenticated
  USING (
    auth.uid() = user_id 
    OR lower(student_email) = lower(auth.jwt()->>'email')
    OR (auth.jwt()->>'email' = 'rupali.eduquest@gmail.com')
  );

-- Allow authenticated students and new guest submissions to insert attempt records
CREATE POLICY "Allow student insert results" ON sat_results
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    user_id IS NULL 
    OR auth.uid() = user_id
    OR lower(student_email) = lower(auth.jwt()->>'email')
  );

-- 4. POLICIES FOR sat_topic_report (Topic & Class Tests)
-- Students can only read topic reports matching their authenticated user ID or email
CREATE POLICY "Allow student read own topic reports" ON sat_topic_report
  FOR SELECT
  TO authenticated
  USING (
    auth.uid() = user_id 
    OR lower(email) = lower(auth.jwt()->>'email')
    OR lower(student_email) = lower(auth.jwt()->>'email')
    OR (auth.jwt()->>'email' = 'rupali.eduquest@gmail.com')
  );

CREATE POLICY "Allow student insert topic reports" ON sat_topic_report
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    user_id IS NULL 
    OR auth.uid() = user_id
    OR lower(email) = lower(auth.jwt()->>'email')
  );

-- 5. POLICIES FOR profiles
CREATE POLICY "Allow student read own profile" ON profiles
  FOR SELECT
  TO authenticated
  USING (
    auth.uid() = id
    OR (auth.jwt()->>'email' = 'rupali.eduquest@gmail.com')
  );

CREATE POLICY "Allow admin full access to profiles" ON profiles
  FOR ALL
  TO authenticated
  USING (auth.jwt()->>'email' = 'rupali.eduquest@gmail.com')
  WITH CHECK (auth.jwt()->>'email' = 'rupali.eduquest@gmail.com');

-- 6. POLICIES FOR sat_registrations
CREATE POLICY "Allow student read own registration" ON sat_registrations
  FOR SELECT
  TO authenticated
  USING (
    lower(student_email) = lower(auth.jwt()->>'email')
    OR (auth.jwt()->>'email' = 'rupali.eduquest@gmail.com')
  );

CREATE POLICY "Allow anonymous registration insert" ON sat_registrations
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
