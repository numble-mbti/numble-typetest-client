'use client';
import React, { useEffect } from 'react';
import CopyURLBtn from '../common/CopyURLBtn';
import { shareKakao } from '@/api/util';

interface TestMainProps {
  setTestProcess: React.Dispatch<React.SetStateAction<number>>;
}

const TestMain = ({ setTestProcess }: TestMainProps) => {
  const handleClickTestStartBtn = () => {
    setTestProcess((prev) => prev + 1);
  };

  const currentUrl = window.location.href;

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="page_wrap" className="bird_test test_main">
      <section>
        <div className="title_area">
          <div className="sub">내가 새라면 어떤 새일까?</div>
          <h2 className="title yuji">새 테스트</h2>
        </div>
        <div className="img_wrap">
          <img src="/images/bird/main-01.png" alt="새 테스트 메인 이미지" />
        </div>
        <div className="cont_block ">
          <div className="title">자신이 어떤 새 인지 알아본 사람</div>
          <div className="content">
            <div className="test_cnt yuji">99,999,999</div>
          </div>
        </div>
        <div className="cont_block share">
          <div className="title">친구한테도 알려주기</div>
          <div className="content">
            <CopyURLBtn currentUrl={currentUrl} />
            <button className="btn_type_a btn_color_02" onClick={() => shareKakao(currentUrl, 'kakao')}>
              <span className="ico_btn ico_btn_kakao"></span>
              <span className="btn_txt">카카오</span>
            </button>
          </div>
        </div>
        <div className="cont_block">
          <div className="content">
            <a className="btn_type_b w100 btn_color_01">
              <button className="btn_txt" onClick={handleClickTestStartBtn}>
                테스트 시작하기
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestMain;
