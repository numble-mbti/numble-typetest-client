import React from 'react';

const Quiz = () => {
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
            <a href="./bird_analysis.html" className="btn_type_b btn_color_05 w100">
              <span className="btn_txt">선택1</span>
            </a>
            <a href="./bird_analysis.html" className="btn_type_b btn_color_05 w100">
              <span className="btn_txt">선택2</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quiz;
