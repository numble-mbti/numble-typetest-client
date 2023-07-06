'use client';
import React from 'react';
import ResultBanner from '@/components/userResult/ResultBanner';

const page = () => {
  return (
    <div id="page_wrap" className="result_list total">
      <header>
        <div className="title_area">
          <h1 className="title text-2xl">내 테스트 결과</h1>
        </div>
      </header>
      <section>
        <div className="cont_block">
          <div className="content">
            <div className="title_list">
              <h3 className="text-lg">새 테스트</h3>
              <ul>
                <ResultBanner />
              </ul>

              <div className="btn_link w100">
                <span className="btn_txt">테스트 결과 전체보기</span>
                <span className="ico_btn ico_btn_arr_right_16"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
