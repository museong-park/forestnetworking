"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/project", label: "Project" },
  { href: "/community", label: "Community" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur supports-backdrop-filter:bg-surface/90">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo_no_bg.png"
            alt="한국농산어촌네트워크"
            width={300}
            height={60}
            className="h-12 w-auto"
            priority
          />
        </Link>

        <nav className="hidden w-full items-center justify-end gap-6 md:flex lg:gap-8 transition-all">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-base font-bold text-foreground transition-colors hover:text-brand"
            >
              {label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-md text-muted md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="메뉴 열기"
        >
          <svg
            className="size-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-surface px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-2">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="rounded-md px-3 py-2 text-base font-bold text-foreground hover:bg-brand-muted hover:text-brand"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-4 px-3 py-2">
              <a href="https://blog.naver.com/prologue/PrologueList.naver?blogId=forestnetworking&categoryNo=21" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-[#03C75A] transition-colors" aria-label="Naver Blog">
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-6"><path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z" /></svg>
              </a>
              <a href="https://www.instagram.com/3goforest?igsh=YW1zNzJ0cXg5ejY=" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-[#E4405F] transition-colors" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
