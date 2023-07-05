'use client';
import { useRouter } from 'next/navigation';
import React, { MouseEvent } from 'react';
import useSWR from 'swr';
import TestCard from './TestCard';
import { Spinner } from './common/Spinner';
import { getAllCategories } from '@/api/test/api';

const TestList = () => {
  const router = useRouter();
  const handleClickTest = (e: MouseEvent<HTMLLIElement>) => {
    router.push(`/test/${e.currentTarget.id}`);
  };
  const { data } = useSWR('categories', getAllCategories);

  return (
    <div>
      <h2 className="text-2xl p-1">테스트 목록</h2>
      {data ? (
        <ul className="p-4 flex justify-center items-center">
          {data.data.map((testCategory) => {
            return <TestCard onClick={handleClickTest} key={testCategory.id} data={testCategory} />;
          })}
        </ul>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default TestList;
