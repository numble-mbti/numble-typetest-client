'use client';
import Link from 'next/link';
import React from 'react';

const EditMyNickname = () => {
  return (
    <div id="page_wrap" className="setting px-8">
      <h1 className="title text-2xl pt-8 font-bold">내 정보 수정하기</h1>
      <section>
        <Link href="/editnick" className="p-2 mt-8 flex justify-between">
          <span className="btn_txt edit_btn">닉네임 수정</span>
          <span className="ico_btn ico_btn_arr_right_24"></span>
        </Link>
      </section>
    </div>
  );
};

export default EditMyNickname;
