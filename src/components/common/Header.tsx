'use client';
import React, { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import Link from 'next/link';
import ModalLayout from './ModalLayout';

import { tokenCookie } from '@/utils/authToken';
import Image from 'next/image';

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
          <div className="left_area" style={{ padding: '10px' }}>
            <Link href="/">
              <Image src="/logo.svg" alt="플러피 로고" width={100} height={50} />
            </Link>
          </div>
          <div className="right_area flex gap-3 items-center px-2 text-2xl">
            <BiMenu onClick={() => setIsModalOpen(true)} className="cursor-pointer" />
          </div>
        </div>
      </header>
      {isModalOpen && <ModalLayout setIsModalOpen={setIsModalOpen} isLogin={isLogin} />}
    </>
  );
};

export default Header;
