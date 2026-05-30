import Link from "next/link";
import { notFound } from "next/navigation";
import { getPopup } from "@/app/actions/popups";
import PopupForm from "../PopupForm";

export default async function AdminEditPopupPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const popup = await getPopup(parseInt(resolvedParams.id));

  if (!popup) {
    notFound();
  }

  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-4 mb-6">
        <Link
          href="/admin/popups"
          className="text-stone-500 hover:text-stone-900"
        >
          ← 뒤로가기
        </Link>
        <h2 className="text-2xl font-bold text-brand">팝업 수정</h2>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-border p-6 sm:p-8">
        <PopupForm initialData={popup} />
      </div>
    </div>
  );
}
