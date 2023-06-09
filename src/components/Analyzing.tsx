'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

interface AnalyzingProps {
  testId: number;
}

const Analyzing = ({ testId }: AnalyzingProps) => {
  const router = useRouter();
  setTimeout(() => {
    router.push(`/test/${testId}/result`);
  }, 1500);

  return (
    <div id="mobile">
      <div id="page_wrap" className="bird_test test_analysis">
        <section>
          <div className="cont_block">
            <div className="title yuji">분석 중...</div>
            <div className="content">
              <div className="img_wrap">
                <img src="/images/bird/analysis.png" alt="당신의 유형을 찾는 중입니다..." />
              </div>
              <div>당신의 선택을 분석중입니다.</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Analyzing;
