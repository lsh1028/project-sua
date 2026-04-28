/**
 * 작성일: 2026-04-28
 * 작성자: 시스템 (Project Sua)
 * 클래스 설명: 상담소(Clinic) 메뉴 활성화 및 아이콘 업데이트
 */

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BottomNav() {
  const pathname = usePathname();

  if (pathname === '/mission') return null;

  const navItems = [
    { name: '홈', path: '/', icon: '🏠' },
    { name: '서재', path: '/library', icon: '📚' },
    { name: '전략', path: '/strategy', icon: '🎯' },
    { name: '상담소', path: '/clinic', icon: '🏥' } // 아이콘 변경 및 활성화
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 pb-safe z-50 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
      <div className="max-w-md mx-auto flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = pathname === item.path;

          return (
            <Link 
              key={item.name} 
              href={item.path}
              className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors
                ${isActive ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'}
              `}
            >
              <span className="text-xl">{item.icon}</span>
              <span className={`text-[10px] font-bold ${isActive ? 'text-blue-600' : 'text-gray-500'}`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}