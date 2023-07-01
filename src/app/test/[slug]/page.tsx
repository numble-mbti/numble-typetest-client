'use client';
import React, { useState } from 'react';
import useSWR from 'swr';
import { getTestQueries } from '@/api/api';
import TestMain from '@/components/test/TestMain';
import Query from '@/components/Query';

interface TypeTestProps {
  params: {
    slug: number;
  };
}

const TypeTest = ({ params: { slug } }: TypeTestProps) => {
  const { data } = useSWR('/api/queries', () => getTestQueries(slug));
  const [testProcess, setTestProcess] = useState(0);

  return (
    <>
      {testProcess === 0 && <TestMain setTestProcess={setTestProcess} />}
      {testProcess > 0 && data && <Query queries={data.data.question} />}
    </>
  );
};

export default TypeTest;
