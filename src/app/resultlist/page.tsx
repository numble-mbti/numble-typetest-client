'use client';
import React, { useEffect, useState } from 'react';
import ResultBanner from '@/components/userResult/ResultBanner';

import { getMyTestResult } from '@/api/user/api';
import { MyTestResultList } from '@/types/user';

const ResultListPage = () => {
  const [resultList, setResultList] = useState<MyTestResultList>();

  const handleSetData = () => {
    getMyTestResult().then((res) => setResultList(res));
  };

  useEffect(() => {
    handleSetData();
  }, []);

  return (
    <div id="page_wrap" className="result_list total">
      <header>
        <div className="title_area">
          <h1 className="title text-2xl">내 테스트 결과</h1>
        </div>
      </header>
      <section>
        <div className="cont_block">
          {resultList &&
            resultList.archives_with_categories.map((data) => {
              return (
                <div className="content" key={data.category_id}>
                  <div className="title_list">
                    <h3 className="text-lg">{data.category_title}</h3>
                    <ul>
                      {data.archives.map((result) => {
                        return <ResultBanner data={result} key={result.archive_seq} />;
                      })}
                    </ul>

                    <div className="btn_link w100">
                      <span className="btn_txt">테스트 결과 전체보기</span>
                      <span className="ico_btn ico_btn_arr_right_16"></span>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </div>
  );
};

export default ResultListPage;
