'use client';
import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

interface CopyURLBtnProps {
  currentUrl: string;
}

const CopyURLBtn = ({ currentUrl }: CopyURLBtnProps) => {
  const [copied, setCopied] = useState(false);
  const handleClickUrlBtn = () => {
    setCopied(true);
  };

  return (
    <CopyToClipboard text={currentUrl}>
      <button className="btn_type_a btn_color_04" onClick={handleClickUrlBtn}>
        <span className="ico_btn ico_btn_url"></span>
        <span className="btn_txt"> {copied ? 'Copied!' : 'Copy URL'}</span>
      </button>
    </CopyToClipboard>
  );
};

export default CopyURLBtn;
