'use client';
import { TestCategory } from '@/types/types';
import Image from 'next/image';
import React, { MouseEvent } from 'react';

interface TestCardProps {
  onClick: (e: MouseEvent<HTMLLIElement>) => void;
  data: TestCategory;
}

const TestCard = ({ onClick, data }: TestCardProps) => {
  return (
    <li
      id={String(data.id)}
      className="w-full flex items-center gap-4 border border-[#E0E0E0] bg-blue-200  hover:bg-blue-300 p-4 rounded-md text-xl cursor-pointer"
      onClick={onClick}
    >
      <Image src="/images/bird/main-01.png" width={100} height={100} alt="테스트 대표 이미지" />
      <div>
        <p className="text-[#0079E3] text-sm">내가 새라면 어떤 새일까?</p>
        <h2 className="font-bold text-2xl">{data.title} 테스트</h2>
      </div>
    </li>
  );
};

export default TestCard;
