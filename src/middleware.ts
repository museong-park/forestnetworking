import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifySession } from "./lib/auth";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isProtectedRoute = path.startsWith("/admin") && path !== "/admin/login";
  
  if (isProtectedRoute) {
    // next/headers의 cookies는 middleware에서 사용 불가하므로 request.cookies 사용
    const sessionCookie = request.cookies.get("admin_session")?.value;
    
    // 이 환경은 Edge runtime이므로 jose를 사용한 verifySession은 동작함
    // 하지만 lib/auth.ts 내부에서 next/headers의 cookies()를 사용하고 있어서
    // Edge runtime에서 문제가 될 수 있음.
    // 그래서 가장 간단하게 쿠키 유무만 체크하고, 상세 검증은 Layout이나 Page에서 수행
    if (!sessionCookie) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
