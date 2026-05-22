import Link from "next/link";
import { getPopups } from "@/app/actions/popups";
import PopupListClient from "./PopupListClient";

export const dynamic = "force-dynamic";

export default async function AdminPopupsPage() {
  const popups = await getPopups();

  return (
    <div className="max-w-5xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-brand">팝업 관리</h2>
          <p className="text-stone-500 mt-1">홈페이지 메인에 노출될 팝업 배너를 관리합니다.</p>
        </div>
        <Link
          href="/admin/popups/new"
          className="bg-brand text-white px-5 py-2.5 rounded-md font-medium hover:bg-brand-hover transition-colors shadow-sm"
        >
          새 팝업 등록
        </Link>
      </div>

      <PopupListClient initialPopups={popups} />
    </div>
  );
}
