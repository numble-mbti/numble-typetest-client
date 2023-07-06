import { TestCategoryDTO, TestQueriesDTO, TestResultType } from '@/types/types';

export async function getAllCategories(): Promise<TestCategoryDTO> {
  const uri = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/categories`;
  const res = await fetch(uri);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export async function getTestQueries(categoryId: number): Promise<TestQueriesDTO> {
  const uri = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/mbti/${categoryId}/check`;
  const res = await fetch(uri);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export async function postTestResult(categoryId: number): Promise<TestQueriesDTO> {
  const uri = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/mbti/${categoryId}/check`;
  const res = await fetch(uri);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export async function getTestResult(categoryId: string, mbti: string): Promise<TestResultType> {
  const uri = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/mbti/${categoryId}/features?type=${mbti}`;
  const res = await fetch(uri);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
