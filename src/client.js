import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://luwsotpbnatoiicfaczp.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1d3NvdHBibmF0b2lpY2ZhY3pwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY5MTMzMTYsImV4cCI6MTk4MjQ4OTMxNn0.lpa1JMVp8yWdJgrQpvcWFrkwGmt4kC6t2h1uuFQEPc4"
);
