import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_SERVER_URL,
  process.env.REACT_APP_SUPABASE_ANON_KEY
);

export { supabase };
