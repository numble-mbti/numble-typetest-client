'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Analyzing from './Analyzing';

const Quiz = () => {
  const router = useRouter();
  const [showAnalyzing, setShowAnalyzing] = useState(false);

  const handleChooseOption = () => {
    setShowAnalyzing(true);
    setTimeout(() => {
      router.push('/test/bird/result');
    }, 1500);
  };

  if (showAnalyzing) {
    return <Analyzing />;
  }

  return (
    <div id="page_wrap" className="bird_test test_page">
      <section>
        <div className="cont_block">
          <div className="title">
            <span className="now yuji">1</span>
            <span className="total yuji">12</span>
          </div>
          <div className="content">
            <div className="img_wrap">
              <img src="/images/bird/test/01.png" alt="첫번째 문제 이미지" />
            </div>
            <div className="question">
              당신은 방금 첫 비행을 성공한 아기새
              <br />
              저기 멀리 나와 비슷한 크기의 새가 보인다.
            </div>
            <button className="btn_type_b btn_color_05 w100" onClick={handleChooseOption}>
              <span className="btn_txt">선택1</span>
            </button>
            <button className="btn_type_b btn_color_05 w100" onClick={handleChooseOption}>
              <span className="btn_txt">선택2</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quiz;
