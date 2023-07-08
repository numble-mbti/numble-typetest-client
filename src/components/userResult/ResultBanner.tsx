import React from 'react';
import { Archive } from '@/types/user';

interface MyResult {
  data: Archive;
}

const ResultBanner = ({ data }: MyResult) => {
  const resultImage = `images/bird/mbti/${data.type}.png`;
  let date = '';

  for (let i = 0; i++; i <= 3) {
    if (!i) {
      date = `${data.created_at[i]}`;
    }
    date = `${date}` + '. ' + `${data.created_at[i]}`;
  }

  return (
    <div className="flex justify-between p-7 m-4 border-solid border border-gray-300 rounded-lg cursor-pointer">
      <div className="left">
        <div className="date">${date}</div>
        <div className="name">${data.result}</div>
      </div>
      <div className="right">
        <img src={resultImage} alt="결과 이미지" />
      </div>
    </div>
  );
};

export default ResultBanner;
