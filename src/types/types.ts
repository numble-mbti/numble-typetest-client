export interface TestCategoryDTO {
  data: TestCategory[];
  message: string;
}

export interface TestCategory {
  id: number;
  kind: string;
  title: string;
  content: string;
}
