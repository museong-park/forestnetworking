"use server";

import { supabase } from "@/lib/supabase";

export async function submitContactForm(formData: FormData) {
  const company = formData.get("company") as string;
  const name = formData.get("name") as string;
  const position = formData.get("position") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const message = formData.get("message") as string;

  const { error } = await supabase.from("contact_submissions").insert({
    company,
    name,
    position,
    email,
    phone,
    message,
  });

  if (error) {
    console.error("Error inserting contact submission:", error);
    return { success: false, error: "접수 중 오류가 발생했습니다." };
  }

  return { success: true };
}

export async function getContactSubmissions() {
  const { data, error } = await supabase
    .from("contact_submissions")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching contact submissions:", error);
    return [];
  }

  return data;
}
