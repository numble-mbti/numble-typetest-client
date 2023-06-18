'use client';

import { useRouter, usePathname } from 'next/navigation';
import { MouseEvent } from 'react';

export default function Home() {
  const router = useRouter();
  const handleClickTest = (e: MouseEvent<HTMLLIElement>) => {
    router.push(`/test/${e.currentTarget.id}`);
  };

  return (
    <main className="p-4">
      <h2 className="text-2xl p-1">테스트 목록</h2>
      <ul className="p-4">
        <li
          id="bird"
          className="bg-blue-600 hover:bg-blue-500 p-4 rounded-full text-xl text-white cursor-pointer"
          onClick={handleClickTest}
        >
          멸종위기 새 테스트
        </li>
      </ul>
    </main>
  );
}
