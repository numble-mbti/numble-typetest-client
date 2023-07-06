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
    <div id="page_wrap" className="setting edit_info">
      <section>
        <h5 className="text-2xl font-bold">닉네임을 입력해주세요</h5>
        <p className="sub">최대 20글자 까지 입력할 수 있습니다.</p>
        <div className="input_wrap">
          <input
            id="nicknameInput"
            className="px-1 py-2"
            type="text"
            value={nickname}
            onChange={handleInputChange}
            maxLength={20}
            required={true}
            placeholder="닉네임을 입력하세요"
          />
          <button onClick={handleClearClick}>Clear</button>

          <div className="char_cnt">
            <p>{characterCount}/20</p>
          </div>
        </div>
        <button onClick={handleUpdateClick}>Update Nickname</button>
      </section>
    </div>
  );
};

export default EditMyNickname;
