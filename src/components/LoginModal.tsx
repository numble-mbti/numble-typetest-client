import React, { SetStateAction, useRef } from 'react';

interface LoginModalProps {
  setIsModalOpen: React.Dispatch<SetStateAction<boolean>>;
}

const LoginModal = ({ setIsModalOpen }: LoginModalProps) => {
  return (
    <div id="login_popup" className="layer_popup">
      <div className="layer_wrap">
        <div className="layer_body">
          <div className="layer_cont">
            <div className="title_area">
              <div className="sub">결과를 저장하시려면</div>
              <a href="/" className="btn_login">
                <span className="btn_txt">로그인</span>
                <span className="ico_btn ico_btn_arr_right_24"></span>
              </a>
            </div>
          </div>
          <div className="layer_cont">
            <div className="sub">아직 회원이 아니세요?</div>
            <a href="/" className="btn_signin btn_type_c w100 btn_color_02">
              <span className="btn_txt">카카오계정으로 시작하기</span>
            </a>
            <a href="/" className="btn_signin btn_type_c w100 btn_color_03">
              <span className="btn_txt">구글 계정으로 시작하기</span>
            </a>
          </div>
        </div>
      </div>
      <div className="layer_blur" onClick={() => setIsModalOpen(false)}></div>
    </div>
  );
};

export default LoginModal;
