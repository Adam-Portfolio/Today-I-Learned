import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://geidztydkpftxmjcgcrw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdlaWR6dHlka3BmdHhtamNnY3J3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI0MjQ2MzksImV4cCI6MTk4ODAwMDYzOX0.wt_WVBTHPPf1BJR6A9uMD9n2dlQQaOuHpKbCDwlZKiM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
