import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "(주)한국농산어촌네트워크 | Go Anywhere, Make Your Life",
  description:
    "자연과 자원이 있는 어느 곳에서든 우리의 삶이 지속 가능하도록 함께합니다. Life Localization Supporter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`font-sans antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
