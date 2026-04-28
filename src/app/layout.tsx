/**
 * 작성일: 2026-04-28
 * 작성자: 시스템 (Project Sua)
 * 클래스 설명: 전역 CSS, Bottom Navigation 및 AuthGuard 보안 계층이 포함된 최상위 뷰 컨테이너
 */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/BottomNav";
import AuthGuard from "@/components/AuthGuard";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Project Sua - 커스텀 학습 플랫폼",
  description: "수아의 목표 달성을 위한 맞춤형 전략 및 학습 로드맵",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        {/* max-w-md를 통해 모바일 앱과 동일한 해상도(폭)로 중앙 정렬 */}
        <div className="max-w-md mx-auto min-h-screen bg-white relative shadow-sm pb-16">
          <AuthGuard>
            {children}
            <BottomNav />
          </AuthGuard>
        </div>
      </body>
    </html>
  );
}