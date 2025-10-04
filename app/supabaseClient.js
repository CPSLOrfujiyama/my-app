import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://geuhcbtsjlstzyoquzsy.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdldWhjYnRzamxzdHp5b3F1enN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk2MTI1MDQsImV4cCI6MjA3NTE4ODUwNH0.pQrL7DTeA_VaPlV3qWWh7TsFAcsrhClTu8FBss05EiA"
);

export default supabase;
