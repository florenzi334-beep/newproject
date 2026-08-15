import { createClient } from '@supabase/supabase-js';

const supabaseUrl =
  'https://wxwidyfafuoojmbgshqz.supabase.co';

const supabasePublishableKey =
  'sb_publishable_mimlKpelYNnBxEjgAeSeIg_7Ueqtzwj';

export const supabase = createClient(
  supabaseUrl,
  supabasePublishableKey
);
