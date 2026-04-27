/** * 작성일: 2026-04-27
 * 작성자: 시스템 (Project Sua)
 * 클래스 설명: 앱의 최상위 레이아웃 (폰트 및 기본 구조 설정)
 */

import './globals.css';

export const metadata = {
  title: 'Project Sua',
  description: 'Sua Learning Platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-gray-50">{children}</body>
    </html>
  );
}