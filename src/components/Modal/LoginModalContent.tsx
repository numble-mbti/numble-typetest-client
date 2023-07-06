import React from 'react';
import { ssoLogin } from '@/api/user/api';

const LoginModalContent = () => {
  return (
    <div className="layer_body">
      <div className="layer_cont">
        <div className="title_area">
          <div className="sub">결과를 저장하시려면</div>
          <div className="btn_login cursor-default">
            <span className="btn_txt">로그인</span>
            <span className="ico_btn ico_btn_arr_right_24"></span>
          </div>
        </div>
      </div>
      <div className="layer_cont">
        <div className="sub">아직 회원이 아니세요?</div>
        <p onClick={() => ssoLogin('kakao')} className="btn_signin btn_type_c w100 btn_color_02">
          <span className="btn_txt">카카오계정으로 시작하기</span>
        </p>
        <p className="btn_signin btn_type_c w100 btn_color_03">
          <span className="btn_txt">구글 계정으로 시작하기</span>
        </p>
      </div>
    </div>
  );
};

export default LoginModalContent;
