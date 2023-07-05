'use client';
import React, { useState } from 'react';
import LoginModal from '../LoginModal';
import { BiHome, BiMenu } from 'react-icons/bi';
import Link from 'next/link';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <>
      <header className="bg-gray-100 border border-b-gray-300">
        <div className="gnb">
          <div className="left_area">
            <h1 className="text-2xl p-2">흔한 테스트</h1>
          </div>
          <div className="right_area flex gap-3 items-center px-2 text-2xl">
            <Link href="/">
              <BiHome />
            </Link>
            <BiMenu onClick={() => setIsModalOpen(true)} />
          </div>
        </div>
      </header>
      {isModalOpen && <LoginModal setIsModalOpen={setIsModalOpen} />}
    </>
  );
};

export default Header;
