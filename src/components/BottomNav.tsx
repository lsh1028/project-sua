/** * 작성일: 2026-04-27
 * 작성자: 시스템 (Project Sua)
 * 클래스 설명: 모바일 앱 스타일의 하단 고정 네비게이션 뷰 컴포넌트
 */

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: '홈', path: '/', icon: '🏠' },
    { name: '서재', path: '/library', icon: '📚' },
    { name: '전략', path: '/strategy', icon: '🎯' },
    { name: '상담소', path: '/clinic', icon: '🚧' } // 공사 중 처리
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 pb-safe z-50">
      <div className="max-w-md mx-auto flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          const isInactive = item.icon === '🚧';

          return (
            <Link 
              key={item.name} 
              href={isInactive ? '#' : item.path}
              className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors
                ${isInactive ? 'opacity-40 cursor-not-allowed' : (isActive ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600')}
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