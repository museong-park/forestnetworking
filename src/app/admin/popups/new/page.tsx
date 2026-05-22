import Link from "next/link";
import PopupForm from "../PopupForm";

export default function AdminNewPopupPage() {
  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-4 mb-6">
        <Link
          href="/admin/popups"
          className="text-stone-500 hover:text-stone-900"
        >
          ← 뒤로가기
        </Link>
        <h2 className="text-2xl font-bold text-brand">새 팝업 등록</h2>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-border p-6 sm:p-8">
        <PopupForm />
      </div>
    </div>
  );
}
