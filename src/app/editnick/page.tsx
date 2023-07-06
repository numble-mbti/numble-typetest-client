'use client';
import React, { ChangeEvent } from 'react';
import { useState } from 'react';

const EditMyNickname = () => {
  const [nickname, setNickname] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setNickname(input);
    setCharacterCount(input.length);
  };

  const handleClearClick = () => {
    setNickname('');
    setCharacterCount(0);
  };

  const handleUpdateClick = () => {
    if (nickname) {
      //
    }
  };
  return (
    <div id="page_wrap" className="setting edit_info px-8">
      <section style={{ height: '100vh' }}>
        <h1 className="text-2xl pt-8 font-bold">닉네임을 입력해주세요</h1>
        <p className="sub">최대 20글자 까지 입력할 수 있습니다.</p>

        <div className="edit_form_wrap mt-8">
          <div className="input_wrap px-3">
            <div style={{ position: 'relative' }}>
              <input
                id="nicknameInput"
                className="px-1 py-1 w100 h-14 border-b-2 focus:outline-0"
                type="text"
                value={nickname}
                onChange={handleInputChange}
                maxLength={20}
                required={true}
                placeholder="닉네임을 입력하세요"
              />
              <button className="clear_btn" onClick={handleClearClick}>
                <img src="icons/clear_btn.svg" alt="clear 버튼" />
              </button>
            </div>
            <div className="char_cnt">
              <p>{characterCount}/20</p>
            </div>
          </div>
          <button
            className="px-3 py-4 w100 text-white text-2xl rounded-lg"
            onClick={handleUpdateClick}
            style={{ backgroundColor: nickname ? '#0079E3' : '#999999' }}
          >
            변경 완료
          </button>
        </div>
      </section>
    </div>
  );
};

export default EditMyNickname;
