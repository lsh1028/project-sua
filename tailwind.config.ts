/** * 작성일: 2026-04-27
 * 작성자: 시스템 (Project Sua)
 * 클래스 설명: Tailwind CSS 스캔 경로 및 테마 설정
 */

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}", // lib 폴더도 추가해서 안전하게 갑니다
  ],
  theme: {
    extend: {
      // 나중에 전직 시스템용 커스텀 색상을 넣을 공간입니다
    },
  },
  plugins: [],
}

export default config