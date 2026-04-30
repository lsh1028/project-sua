/**
 * 작성일: 2026-04-30
 * 작성자: 시스템 (Project Sua)
 * 클래스 설명: 인앱 브라우저 탈출 로직 및 AuthGuard가 포함된 최상위 Client Layout
 */

'use client';

import { useEffect } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/BottomNav";
import AuthGuard from "@/components/AuthGuard";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const targetUrl = "https://project-sua.vercel.app/";

    // 1. 카카오톡 인앱 브라우저 감지
    if (userAgent.includes('kakaotalk')) {
      
      // 2. 안드로이드: Intent 스키마를 이용해 크롬으로 강제 이동 (원터치)
      if (userAgent.includes('android')) {
        location.href = `intent://${targetUrl.replace(/https?:\/\//i, '')}#Intent;scheme=https;package=com.android.chrome;end`;
      } 
      
      // 3. iOS(아이폰/패드): 카톡 외부 브라우저 호출 스키마 사용
      else if (userAgent.includes('iphone') || userAgent.includes('ipad') || userAgent.includes('ipod')) {
        location.href = `kakaotalk://web/openExternal?url=${encodeURIComponent(targetUrl)}`;
      }
    }
  }, []);

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