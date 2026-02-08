import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-stone-100 text-muted">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-lg font-bold text-brand">
              (주)한국농산어촌네트워크
            </p>
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
          </div>
        </div>
        <p className="mt-8 border-t border-border pt-8 text-center text-sm">
          ©2025 한국농산어촌네트워크 All rights reserved.
        </p>
      </div>
    </footer>
  );
}
