'use client';
import React, { useState } from 'react';
import LoginModal from '../LoginModal';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <>
      <header>
        <div className="gnb">
          <div className="left_area"></div>
          <div className="right_area">
            <a className="menu_button" onClick={() => setIsModalOpen(true)}>
              <span className="ico_header ico_header_menu"></span>
            </a>
          </div>
        </div>
      </header>
      {isModalOpen && <LoginModal setIsModalOpen={setIsModalOpen} />}
    </>
  );
};

export default Header;
