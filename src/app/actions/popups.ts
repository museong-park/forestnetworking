"use server";

import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export async function getPopups() {
  const { data, error } = await supabase
    .from("popups")
    .select("*")
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
}

export async function getActivePopups() {
  const { data, error } = await supabase
    .from("popups")
    .select("*")
    .eq("is_active", true)
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
}

export async function getPopup(id: number) {
  const { data, error } = await supabase
    .from("popups")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;
  return data;
}

export async function createPopup(formData: FormData) {
  const title = formData.get("title") as string;
  const link_url = formData.get("link_url") as string;
  const image_url = formData.get("image_url") as string;
  const is_active = formData.get("is_active") === "true";

  if (!title || !image_url) {
    return { error: "제목과 이미지는 필수입니다." };
  }

  // Get max sort_order
  const { data: maxSortData } = await supabase
    .from("popups")
    .select("sort_order")
    .order("sort_order", { ascending: false })
    .limit(1);
    
  const newSortOrder = (maxSortData?.[0]?.sort_order ?? 0) + 1;

  const { error } = await supabase.from("popups").insert([
    {
      title,
      link_url,
      image_url,
      is_active,
      sort_order: newSortOrder,
    },
  ]);

  if (error) {
    console.error("Error creating popup:", error);
    return { error: "팝업 생성에 실패했습니다." };
  }

  revalidatePath("/");
  revalidatePath("/admin/popups");
  return { success: true, redirectUrl: "/admin/popups" };
}

export async function updatePopup(id: number, formData: FormData) {
  const title = formData.get("title") as string;
  const link_url = formData.get("link_url") as string;
  const image_url = formData.get("image_url") as string;
  const is_active = formData.get("is_active") === "true";

  if (!title) {
    return { error: "제목은 필수입니다." };
  }

  const updateData: any = {
    title,
    link_url,
    is_active,
    updated_at: new Date().toISOString(),
  };

  // Only update image if a new one is provided
  if (image_url) {
    updateData.image_url = image_url;
  }

  const { error } = await supabase
    .from("popups")
    .update(updateData)
    .eq("id", id);

  if (error) {
    console.error("Error updating popup:", error);
    return { error: "팝업 수정에 실패했습니다." };
  }

  revalidatePath("/");
  revalidatePath("/admin/popups");
  return { success: true, redirectUrl: "/admin/popups" };
}

export async function deletePopup(id: number) {
  const { error } = await supabase.from("popups").delete().eq("id", id);

  if (error) {
    console.error("Error deleting popup:", error);
    return { error: "팝업 삭제에 실패했습니다." };
  }

  revalidatePath("/");
  revalidatePath("/admin/popups");
  return { success: true };
}

export async function togglePopupActive(id: number, is_active: boolean) {
  const { error } = await supabase
    .from("popups")
    .update({ is_active, updated_at: new Date().toISOString() })
    .eq("id", id);

  if (error) {
    console.error("Error toggling popup:", error);
    return { error: "상태 변경에 실패했습니다." };
  }

  revalidatePath("/");
  revalidatePath("/admin/popups");
  return { success: true };
}

export async function updatePopupOrder(items: { id: number; sort_order: number }[]) {
  // Supabase doesn't have bulk update easily with the JS client unless via RPC or individual updates.
  // Given the small number of popups (around 5), individual updates are fine.
  for (const item of items) {
    await supabase
      .from("popups")
      .update({ sort_order: item.sort_order, updated_at: new Date().toISOString() })
      .eq("id", item.id);
  }

  revalidatePath("/");
  revalidatePath("/admin/popups");
  return { success: true };
}
