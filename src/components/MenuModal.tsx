import React from 'react';

const MenuModal = () => {
  return (
    <div id="my_modal" className="layer_popup">
      <div className="layer_wrap">
        <div className="layer_body">
          <div className="layer_cont">
            <div className="title_area">
              <div className="sub">반가워요!</div>
              <div className="nickname">
                <span className="name">닉네임이들어가는곳닉네임이들어가는곳</span>
                <span className="m">님</span>
              </div>
            </div>
            <ul className="menu_list">
              <li className="menu_item">
                <a href="../common/result_list.html">
                  <span>내 테스트 결과</span>
                </a>
              </li>
              <li className="menu_item">
                <a href="../common/setting.html">
                  <span>내 정보 설정</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="layer_cont">
            <div className="sub">친구와 테스트 결과를 비교해보세요!</div>
            <a href="#" className="btn_signin btn_type_c w100 btn_color_02">
              <span className="btn_txt">카카오톡으로 친구 초대하기</span>
            </a>
            <a href="#" className="btn_signin btn_type_c w100 btn_color_04">
              <span className="btn_txt">URL로 친구 초대하기</span>
            </a>
          </div>
        </div>
      </div>
      <div className="layer_blur"></div>
    </div>
  );
};

export default MenuModal;
