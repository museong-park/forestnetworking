"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const CERT_BASE = "/3. 인증서";
const CERTS = [
  { src: `${CERT_BASE}/cert1.jpg`, alt: "인증서 1" },
  { src: `${CERT_BASE}/cert2.jpg`, alt: "인증서 2" },
  { src: `${CERT_BASE}/cert3.jpg`, alt: "인증서 3" },
  { src: `${CERT_BASE}/cert4.jpg`, alt: "인증서 4" },
  { src: `${CERT_BASE}/cert5.jpg`, alt: "인증서 5" },
  { src: `${CERT_BASE}/cert6.jpg`, alt: "인증서 6" },
  { src: `${CERT_BASE}/cert7.jpg`, alt: "인증서 7" },
];

export default function CertGallery() {
  const [selected, setSelected] = useState<number | null>(null);

  const close = useCallback(() => setSelected(null), []);

  useEffect(() => {
    if (selected === null) return;
    const onEscape = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [selected, close]);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {CERTS.map((cert, i) => (
          <button
            key={cert.src}
            type="button"
            onClick={() => setSelected(i)}
            className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border bg-stone-100 shadow-sm transition hover:border-stone-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
          >
            <Image
              src={cert.src}
              alt={cert.alt}
              fill
              className="object-contain transition group-hover:scale-[1.02]"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            />
          </button>
        ))}
      </div>

      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="인증서 크게 보기"
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="닫기"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div
            className="relative h-[85vh] w-full max-w-4xl overflow-hidden rounded-lg bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={CERTS[selected].src}
              alt={CERTS[selected].alt}
              fill
              className="object-contain"
              sizes="(max-width: 896px) 90vw, 896px"
            />
          </div>
        </div>
      )}
    </>
  );
}
