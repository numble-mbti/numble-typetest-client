'use client';
import LoginModal from '@/components/LoginModal';
import React, { useState } from 'react';

const page = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div id="wrap">
      <div id="mobile">
        <div id="page_wrap" className="bird_test test_main">
          <header>
            <div className="gnb">
              <div className="left_area"></div>
              <div className="right_area">
                <div className="menu_button" onClick={() => setIsModalOpen(true)}>
                  <span className="ico_header ico_header_menu" onClick={() => setIsModalOpen(true)}></span>
                </div>
              </div>
            </div>
          </header>
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
                <button className="btn_type_a btn_color_04">
                  <span className="ico_btn ico_btn_url"></span>
                  <span className="btn_txt">URL</span>
                </button>
                <button className="btn_type_a btn_color_02">
                  <span className="ico_btn ico_btn_kakao"></span>
                  <span className="btn_txt">카카오</span>
                </button>
              </div>
            </div>
            <div className="cont_block">
              <div className="content">
                <a href="./bird_test.html" className="btn_type_b w100 btn_color_01">
                  <span className="btn_txt">테스트 시작하기</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
      {isModalOpen && <LoginModal setIsModalOpen={setIsModalOpen} />}
    </div>
  );
};

export default page;
