import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | (주)한국농산어촌네트워크",
  description: "협업·문의를 남겨 주세요.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
