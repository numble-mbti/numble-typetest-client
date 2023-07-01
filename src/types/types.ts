type IndicatorType = 'EI' | 'SN' | 'TF' | 'JP';
type MBTIType = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';

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

export interface TestQueriesDTO {
  data: {
    category_id: number;
    question: TestQuery[];
  };
  message: string;
}
export interface TestQuery {
  answers: { type: MBTIType; content: string }[];
  content: string;
  indicator: IndicatorType;
}
