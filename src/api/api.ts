import { TestCategoryDTO } from '@/types/types';

export async function getAllCategories(): Promise<TestCategoryDTO> {
  const res = await fetch('http://101.101.219.178/api/categories');
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
