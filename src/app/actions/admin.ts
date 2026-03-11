"use server";

import { createSession, deleteSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export async function loginAdmin(prevState: any, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (
    email === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASSWORD
  ) {
    await createSession();
    redirect("/admin/contacts");
  }

  return { error: "이메일 또는 비밀번호가 올바르지 않습니다." };
}

export async function logoutAdmin() {
  await deleteSession();
  redirect("/admin/login");
}
