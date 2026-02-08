"use client";

import { useState } from "react";

export default function ContactForm() {
  const [agree, setAgree] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!agree) return;
    setSubmitted(true);
    // TODO: API 연동 또는 이메일 전송
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-emerald-200 bg-brand-muted p-8 text-center">
        <p className="font-medium text-brand">문의가 접수되었습니다.</p>
        <p className="mt-2 text-sm text-muted">
          담당자가 확인 후 연락드리겠습니다.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-xl border border-border bg-surface p-6 shadow-sm sm:p-8"
    >
      <div>
        <label
          htmlFor="company"
          className="mb-1 block text-sm font-medium text-foreground"
        >
          회사명
        </label>
        <input
          id="company"
          name="company"
          type="text"
          className="w-full rounded-lg border border-border px-4 py-2.5 text-foreground focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
          placeholder="(주)회사명"
        />
      </div>
      <div>
        <label
          htmlFor="name"
          className="mb-1 block text-sm font-medium text-foreground"
        >
          담당자명
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className="w-full rounded-lg border border-border px-4 py-2.5 text-foreground focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
          placeholder="홍길동"
        />
      </div>
      <div>
        <label
          htmlFor="position"
          className="mb-1 block text-sm font-medium text-foreground"
        >
          직급 / 소속
        </label>
        <input
          id="position"
          name="position"
          type="text"
          className="w-full rounded-lg border border-border px-4 py-2.5 text-foreground focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
          placeholder="부서명 / 직급"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="mb-1 block text-sm font-medium text-foreground"
        >
          이메일
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-border px-4 py-2.5 text-foreground focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
          placeholder="help@example.com"
        />
      </div>
      <div>
        <label
          htmlFor="phone"
          className="mb-1 block text-sm font-medium text-foreground"
        >
          연락처
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="w-full rounded-lg border border-border px-4 py-2.5 text-foreground focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
          placeholder="010-0000-0000"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="mb-1 block text-sm font-medium text-foreground"
        >
          문의사항
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full rounded-lg border border-border px-4 py-2.5 text-foreground focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
          placeholder="협업·문의 내용을 입력해 주세요."
        />
      </div>
      <div className="flex items-start gap-3">
        <input
          id="privacy"
          type="checkbox"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
          className="mt-1 size-4 rounded border-border text-brand focus:ring-brand"
        />
        <label htmlFor="privacy" className="text-sm text-muted">
          개인정보 수집·이용에 동의합니다. (필수) 수집 항목: 회사명, 담당자명,
          직급/소속, 이메일, 연락처, 문의사항. 이용 목적: 협업·문의 응대. 보유
          기간: 문의 처리 완료 후 파기.
          <a href="#" className="ml-1 font-medium text-brand hover:underline">
            개인정보처리방침
          </a>
        </label>
      </div>
      <button
        type="submit"
        disabled={!agree}
        className="w-full rounded-full bg-brand py-3 font-medium text-white transition-colors hover:bg-brand-hover disabled:cursor-not-allowed disabled:opacity-50"
      >
        문의 보내기
      </button>
    </form>
  );
}
