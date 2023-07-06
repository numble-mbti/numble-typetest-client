import React, { SetStateAction } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { tokenCookie } from '@/utils/authToken';

import LoginModalContent from '../Modal/LoginModalContent';
import UserInfoModalContent from '../Modal/UserInfoModalContent';

interface ModalProps {
  setIsModalOpen: React.Dispatch<SetStateAction<boolean>>;
  isLogin: boolean;
}

const ModalLayout = ({ setIsModalOpen, isLogin }: ModalProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const logout = () => {
    tokenCookie.deleteCookie('accessToken');
    if (pathname !== '/') {
      router.push('/');
    }
    setIsModalOpen(false);
  };

  return (
    <div id="login_popup" className="layer_popup">
      <div className="layer_wrap">
        {isLogin ? <UserInfoModalContent setIsModalOpen={setIsModalOpen} logout={logout} /> : <LoginModalContent />}
      </div>
      <div className="layer_blur" onClick={() => setIsModalOpen(false)}></div>
    </div>
  );
};

export default ModalLayout;
