import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tery's Stroy",
  description: "설명되지 않은 사건과 풀리지 않은 기록을 모으는 미스터리 컬렉션.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
