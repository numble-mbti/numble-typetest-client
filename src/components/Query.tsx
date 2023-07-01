'use client';
import React, { MouseEvent, useState } from 'react';
import { TestQuery } from '@/types/types';

interface QueryProps {
  queries: TestQuery[];
  testProcess: number;
  setTestProcess: React.Dispatch<React.SetStateAction<number>>;
}

const initialTestScore = {
  EI: 0,
  SN: 0,
  TF: 0,
  JP: 0,
};

const Query = ({ queries, testProcess, setTestProcess }: QueryProps) => {
  const {
    answers: [choice1, choice2],
    content,
  } = queries[testProcess - 1];

  const [testResult, setTestResult] = useState(initialTestScore);

  const handleClickQuery = (e: MouseEvent<HTMLButtonElement>) => {
    const choiceType = e.currentTarget.value;
    setTestProcess((prev) => prev + 1);
    setTestResult((prev) => {
      switch (choiceType) {
        case 'E':
          return { ...prev, EI: prev.EI + 1 };
        case 'S':
          return { ...prev, SN: prev.SN + 1 };
        case 'T':
          return { ...prev, TF: prev.TF + 1 };
        case 'J':
          return { ...prev, JP: prev.JP + 1 };
        default:
          return prev;
      }
    });
  };

  return (
    <div id="page_wrap" className="bird_test test_page">
      <section>
        <div className="cont_block">
          <div className="title">
            <span className="now yuji">{testProcess}</span>
            <span className="total yuji">12</span>
          </div>
          <div className="content">
            <div className="img_wrap">
              <img src="/images/bird/test/01.png" alt="첫번째 문제 이미지" />
            </div>
            <div className="question">{content}</div>
            <div className="btn_type_b btn_color_05 w100">
              <button className="btn_txt" onClick={handleClickQuery} value={choice1.type}>
                {choice1.content}
              </button>
            </div>
            <div className="btn_type_b btn_color_05 w100">
              <button className="btn_txt" onClick={handleClickQuery} value={choice2.type}>
                {choice2.content}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Query;
