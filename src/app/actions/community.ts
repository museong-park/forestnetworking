"use server";

import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createCommunityPost(formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const category = formData.get("category") as string;

  const { data, error } = await supabase
    .from("community_posts")
    .insert({
      title,
      content,
      category,
      user_id: "관리자", // 어드민이 작성
    })
    .select("id")
    .single();

  if (error) {
    console.error("Error creating post", error);
    return { error: "게시물 작성에 실패했습니다." };
  }

  revalidatePath("/community");
  revalidatePath("/admin/community");
  redirect(`/admin/community`);
}

export async function updateCommunityPost(id: number, formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const category = formData.get("category") as string;

  const { error } = await supabase
    .from("community_posts")
    .update({
      title,
      content,
      category,
    })
    .eq("id", id);

  if (error) {
    console.error("Error updating post", error);
    return { error: "게시물 수정에 실패했습니다." };
  }

  revalidatePath("/community");
  revalidatePath("/admin/community");
  revalidatePath(`/admin/community/${id}`);
  redirect(`/admin/community/${id}`);
}


export async function deleteCommunityPost(id: number) {
  const { error } = await supabase.from("community_posts").delete().eq("id", id);
  if (error) {
    console.error("Error deleting post:", error);
    throw new Error("삭제 실패");
  }
  revalidatePath("/community");
  revalidatePath("/admin/community");
  redirect("/admin/community");
}

export async function createCommunityComment(postId: number, content: string, userId: string = "익명") {
  const { error } = await supabase.from("community_comments").insert({
    post_id: postId,
    content,
    user_id: userId,
  });

  if (error) {
    console.error("Error creating comment:", error);
    return { success: false, error: "댓글 작성 실패" };
  }

  revalidatePath(`/community/${postId}`);
  revalidatePath(`/admin/community/${postId}`);
  return { success: true };
}

export async function deleteCommunityComment(id: number, postId: number) {
  const { error } = await supabase.from("community_comments").delete().eq("id", id);
  
  if (error) {
    console.error("Error deleting comment:", error);
    throw new Error("삭제 실패");
  }
  
  revalidatePath(`/community/${postId}`);
  revalidatePath(`/admin/community/${postId}`);
}
