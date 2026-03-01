import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-stone-100 text-muted">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <Image
              src="/logo_no_bg.png"
              alt="한국농산어촌네트워크"
              width={300}
              height={60}
              className="mb-4 h-12 w-auto grayscale opacity-80"
            />
            <p className="mt-1 text-sm text-foreground">대표이사: 김소민</p>
          </div>
          <div className="space-y-1 text-sm">
            <p>주소: 원주시 북원로2738번길 14(태장동)</p>
            <p>사업자번호: 576-87-01507</p>
            <p>TEL 033-733-1983 / FAX 033-734-1983</p>
            <p>이메일: help@k-network.org</p>
            <p>계좌: 신한 140-014-726645</p>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <Link
              href="/contact"
              className="font-medium text-brand hover:underline"
            >
              협업 문의
            </Link>
            <span>개인정보취급방침</span>
            <span>이용약관</span>
            <div className="mt-4 flex items-center gap-4">
              <a href="https://blog.naver.com/prologue/PrologueList.naver?blogId=forestnetworking&categoryNo=21" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-[#03C75A] transition-colors" aria-label="Naver Blog">
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-6"><path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z" /></svg>
              </a>
              <a href="https://www.instagram.com/3goforest?igsh=YW1zNzJ0cXg5ejY=" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-[#E4405F] transition-colors" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </a>
            </div>
          </div>
        </div>
        <p className="mt-8 border-t border-border pt-8 text-center text-sm">
          ©2025 한국농산어촌네트워크 All rights reserved.
        </p>
      </div>
    </footer>
  );
}
