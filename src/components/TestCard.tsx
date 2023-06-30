'use client';
import { TestCategory } from '@/types/types';
import React, { MouseEvent } from 'react';

interface TestCardProps {
  onClick: (e: MouseEvent<HTMLLIElement>) => void;
  data: TestCategory;
}

const TestCard = ({ onClick, data }: TestCardProps) => {
  return (
    <li
      id={data.title}
      className="w-full bg-blue-600 hover:bg-blue-500 p-4 rounded-full text-xl text-white cursor-pointer"
      onClick={onClick}
    >
      {data.title}
    </li>
  );
};

export default TestCard;
