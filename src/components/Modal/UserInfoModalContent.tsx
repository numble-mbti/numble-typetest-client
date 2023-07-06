import React, { SetStateAction } from 'react';
import { useRouter } from 'next/navigation';

interface ModalProps {
  setIsModalOpen: React.Dispatch<SetStateAction<boolean>>;
  logout: () => void;
}

const UserInfoModalContent = ({ setIsModalOpen, logout }: ModalProps) => {
  const router = useRouter();

  const goToPage = (route: string) => {
    router.push(`${route}`);
    setIsModalOpen(false);
  };

  return (
    <div className="layer_body">
      <div className="layer_cont">
        <div className="title_area">
          <div className="sub">반가워요!</div>
          <div className="btn_login">
            <span className="btn_txt">유저이름 님</span>
            <span className="ico_btn ico_btn_arr_right_24"></span>
          </div>
          <div className="menu_list text-sm">
            <span className="menu_item cursor-pointer w-auto" onClick={() => goToPage('/resultlist')}>
              내 테스트 결과
            </span>
            <span className="menu_item cursor-pointer w-auto" onClick={() => goToPage('/myinfo')}>
              내 정보 설정
            </span>
          </div>
        </div>
      </div>
      <div className="layer_cont">
        <div className="sub">친구와 테스트를 공유해보세요!</div>
        <p className="btn_signin btn_type_c w100 btn_color_02">
          <span className="btn_txt">카카오톡으로 친구 초대하기</span>
        </p>
        <p className="btn_signin btn_type_c w100 btn_color_03">
          <span className="btn_txt">URL로 친구 초대하기</span>
        </p>
      </div>

      <div onClick={() => logout()} className="text-sm text-center underline mt-4 px-5 cursor-pointer decoration-gray-400 text-gray-400">
        로그아웃
      </div>
    </div>
  );
};

export default UserInfoModalContent;
