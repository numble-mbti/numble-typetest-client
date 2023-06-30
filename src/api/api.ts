import { TestCategoryDTO } from '@/types/types';
const dest = '/api/categories';

export async function getAllCategories(): Promise<TestCategoryDTO> {
  const uri = `${process.env.NEXT_PUBLIC_API_ENDPOINT}${dest}`;
  const res = await fetch(uri);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
