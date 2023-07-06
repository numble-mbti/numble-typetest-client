'use client';
import React, { useState } from 'react';
import { BiHome, BiMenu } from 'react-icons/bi';
import Link from 'next/link';
import ModalLayout from './ModalLayout';

import { tokenCookie } from '@/utils/authToken';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const checkLoginStatus = () => {
    const accessToken = tokenCookie.getCookie('accessToken');
    if (accessToken) {
      return true;
    } else {
      return false;
    }
  };
  const isLogin = checkLoginStatus();

  return (
    <>
      <header className="bg-gray-100 border border-b-gray-300 z-50">
        <div className="gnb">
          <div className="left_area">
            <h1 className="text-2xl p-2">흔한 테스트</h1>
          </div>
          <div className="right_area flex gap-3 items-center px-2 text-2xl">
            <Link href="/">
              <BiHome />
            </Link>
            <BiMenu onClick={() => setIsModalOpen(true)} className="cursor-pointer" />
          </div>
        </div>
      </header>
      {isModalOpen && <ModalLayout setIsModalOpen={setIsModalOpen} isLogin={isLogin} />}
    </>
  );
};

export default Header;
