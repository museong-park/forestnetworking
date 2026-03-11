import { verifySession } from "@/lib/auth";
import { logoutAdmin } from "@/app/actions/admin";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ReactNode } from "react";

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const session = await verifySession();

  // /admin/login 에서는 레이아웃의 네비게이션을 숨김
  // 하지만 여기서는 간단히 서버 컴포넌트 렌더링으로 처리할 수 있도록 분리하거나,
  // children 내부에서 판단하기 어려우므로 layout 자체에 조건을 줄 수 있음.
  // 이 레이아웃이 /admin 하위에 전체 적용되므로 로그인 페이지인지 확인
  if (!session) {
    // 세션이 없고 현재 경로가 login이 아니라면 redirect
    // 다만 layout.tsx 안에서 path 확인이 어려우니, 미들웨어에 의존하거나
    // children으로 그냥 넘김 (보안은 각 page.tsx에서 처리)
    // 좀 더 확실한 방법은 Next.js Middleware를 사용하는 것이지만, 
    // 여기서는 레이아웃에서 session이 없으면 unauthenticated view 리턴
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen bg-stone-50">
      <aside className="w-64 bg-white border-r border-border p-6 flex flex-col">
        <h1 className="text-xl font-bold text-brand mb-8">Admin Dashboard</h1>
        <nav className="flex-1 space-y-2">
          <Link
            href="/admin/contacts"
            className="block px-4 py-2 rounded-md text-stone-600 hover:bg-stone-100 hover:text-stone-900"
          >
            문의 접수 내역
          </Link>
          <Link
            href="/admin/community"
            className="block px-4 py-2 rounded-md text-stone-600 hover:bg-stone-100 hover:text-stone-900"
          >
            커뮤니티 관리
          </Link>
        </nav>
        <form action={logoutAdmin}>
          <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md">
            로그아웃
          </button>
        </form>
      </aside>
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
