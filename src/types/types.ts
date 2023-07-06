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
    questions: TestQuery[];
  };
  message: string;
}
export interface TestQuery {
  answers: { type: MBTIType; content: string }[];
  content: string;
  indicator: IndicatorType;
}

interface CompatibilityType {
  description: string;
  mbti_type: string;
  name: string;
}
interface TestResultContent {
  compatibility: {
    best: CompatibilityType;
    worst: CompatibilityType;
  };
  contents: string[];
}

export interface TestData {
  content: TestResultContent;
  endangeredGrand: number;
  name: string;
}

export interface TestResultType {
  data: TestData;
  message: string;
}
