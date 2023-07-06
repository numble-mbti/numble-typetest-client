import React from 'react';

const ResultBanner = () => {
  // const resultImage = `images/bird/mbti/${result}.svg`;
  const resultImage = `images/bird/mbti/istp.svg`;

  return (
    <div className="flex justify-between p-7 m-4 border-solid border border-gray-300 rounded-lg cursor-pointer">
      <div className="left">
        <div className="date">2023.06.03.</div>
        <div className="name">검은머리갈매기</div>
      </div>
      <div className="right">
        <img src={resultImage} alt="" />
      </div>
    </div>
  );
};

export default ResultBanner;
