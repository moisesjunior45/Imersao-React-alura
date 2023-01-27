import { createClient } from "@supabase/supabase-js";


const PROJECT_URL = "https://vafpfhnokpevlynlxheu.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZhZnBmaG5va3Bldmx5bmx4aGV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ2OTMxOTksImV4cCI6MTk5MDI2OTE5OX0.Ac85T2byzNfwbAhJeMEIc3F3oBVK6gnHpM3VyHTXDjc";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                .select("*");
        }
    }
}