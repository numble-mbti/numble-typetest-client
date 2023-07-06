'use client';
import { getTestResult } from '@/api/test/api';
import TestResult from '@/components/test/TestResult';
import React from 'react';
import useSWR from 'swr';

interface TestResulPagetProps {
  params: {
    slug: string;
  };
}

const TestResultPage = ({ params: { slug } }: TestResulPagetProps) => {
  const mbti = 'ISTJ';
  const { data } = useSWR(`/api/mbti/${slug}/features`, () => getTestResult(slug, mbti));
  return data ? <TestResult result={data.data} /> : <div>Loading...</div>;
};

export default TestResultPage;
