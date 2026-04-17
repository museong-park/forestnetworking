import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-stone-100 text-stone-600">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_2fr_1fr]">
          {/* Logo & Brand Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <Image
                src="/logo_no_bg.png"
                alt="한국농산어촌네트워크"
                width={300}
                height={60}
                className="h-12 w-auto transition-transform hover:scale-105"
              />
              <p className="text-lg font-bold text-stone-900">
                주식회사 한국농산어촌네트워크
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href="https://blog.naver.com/prologue/PrologueList.naver?blogId=forestnetworking&categoryNo=21" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex size-10 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-stone-200 transition-all hover:bg-[#03C75A] hover:ring-[#03C75A]" 
                aria-label="Naver Blog"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-5 transition-colors group-hover:text-white"><path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z" /></svg>
              </a>
              <a 
                href="https://www.instagram.com/3goforest?igsh=YW1zNzJ0cXg5ejY=" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex size-10 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-stone-200 transition-all hover:bg-[#E4405F] hover:ring-[#E4405F]" 
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5 transition-colors group-hover:text-white"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </a>
            </div>
          </div>

          {/* Business Info Section */}
          <div className="grid gap-x-8 gap-y-2 text-sm sm:grid-cols-1">
            <div className="flex flex-col gap-1.5 md:flex-row md:items-center">
              <span className="font-semibold text-stone-900 md:w-28">대표이사</span>
              <span className="text-stone-600">김소민</span>
            </div>
            <div className="flex flex-col gap-1.5 md:flex-row md:items-center">
              <span className="font-semibold text-stone-900 md:w-28">주소</span>
              <span className="text-stone-600">강원 원주시 북원로2738번길 14(태장동)</span>
            </div>
            <div className="flex flex-col gap-1.5 md:flex-row md:items-center">
              <span className="font-semibold text-stone-900 md:w-28">사업자등록번호</span>
              <span className="text-stone-600">576-87-01507</span>
            </div>
            <div className="flex flex-col gap-1.5 md:flex-row md:items-center">
              <span className="font-semibold text-stone-900 md:w-28">TEL & FAX</span>
              <span className="text-stone-600">TEL: 033-733-1983 / FAX: 033-734-1983</span>
            </div>
            <div className="flex flex-col gap-1.5 md:flex-row md:items-center">
              <span className="font-semibold text-stone-900 md:w-28">이메일</span>
              <a href="mailto:edu@k-network.org" className="text-brand hover:underline">edu@k-network.org</a>
            </div>
            <div className="flex flex-col gap-1.5 md:flex-row md:items-center">
              <span className="font-semibold text-stone-900 md:w-28">개인정보관리책임자</span>
              <span className="text-stone-600">한미희</span>
            </div>
            <div className="flex flex-col gap-1.5 md:flex-row md:items-center">
              <span className="font-semibold text-stone-900 md:w-28">계좌</span>
              <span className="text-stone-600">신한 140-014-726645</span>
            </div>
          </div>

          {/* Useful Links Section */}
          <div className="flex flex-col gap-4 text-sm">
            <Link
              href="/contact"
              className="w-fit font-semibold text-brand transition-colors hover:text-brand-hover hover:underline"
            >
              협업 문의
            </Link>
            <button className="w-fit text-left text-stone-600 transition-colors hover:text-stone-900 hover:underline cursor-pointer">
              개인정보취급방침
            </button>
            <button className="w-fit text-left text-stone-600 transition-colors hover:text-stone-900 hover:underline cursor-pointer">
              이용약관
            </button>
          </div>
        </div>
        
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-stone-200 pt-8 text-xs text-stone-400 sm:flex-row">
          <p>© 2025 주식회사 한국농산어촌네트워크 All rights reserved.</p>
          <div className="flex gap-4">
            <span>Life Localization Supporter</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
