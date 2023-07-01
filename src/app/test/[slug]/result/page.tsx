import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div>
      <div id="page_wrap" className="bird_test bird_result">
        <section>
          <div className="title_area">
            <div className="title">당신은</div>
            <div className="img_wrap">
              <img src="/images/bird/mbti/istp.svg" alt="당신은 검은검리갈매기" />
            </div>
          </div>
          <div className="cont_block">
            <div className="title">
              <span className="badge badge_type_01">멸종위기 2급</span>
              <div className="yuji">검은머리갈매기</div>
            </div>
            <div className="content">
              <ul className="type_point type_point_type_01">
                <li className="point_item">새로운 만남에 대해 시간이 필요한 유형이예요</li>
                <li className="point_item">그렇지만 친해지면 나는야 말많은 장난꾸러기!</li>
                <li className="point_item">귀찮은게 많아 최대한 미루는 편이예요</li>
                <li className="point_item">노력을 줄이는데 관심이 많고 효율성을 중요하게 생각해요.</li>
                <li className="point_item">간섭받기를 싫어하고 하고 싶은 것만 하고 싶어 해요</li>
                <li className="point_item">그렇지만 욕심이 많고 잘하고싶은게 너무 많아요</li>
                <li className="point_item">좋고 싫고가 많이 분명해요</li>
                <li className="point_item">할 말이 있을 때 말하는 편이예요. 굳이 이어나가려고 하지 않아요.</li>
              </ul>
            </div>
          </div>

          <div className="cont_block">
            <div className="content">
              <ul className="type_match">
                <li className="match_item">
                  <div className="good badge badge_type_02">환상의 궁합</div>
                  <div className="img_wrap">
                    <img src="/images/bird/mbti/istp.svg" alt="검은머리갈매기" className="" />
                  </div>
                  <div className="type_name">검은머리갈매기</div>
                  <div className="desc">검은머리갈매기랑은 이러쿵 저러쿵해서 잘 맞는다</div>
                </li>
                <li className="match_item">
                  <div className="bad badge badge_type_02">환장의 궁합</div>
                  <div className="img_wrap">
                    <img src="/images/bird/mbti/istp.svg" alt="검은머리갈매기" className="" />
                  </div>
                  <div className="type_name">검은머리갈매기</div>
                  <div className="desc">검은머리갈매기랑은 이러쿵 저러쿵해서 잘 맞는다</div>
                </li>
              </ul>
            </div>
          </div>
          <div className="cont_block">
            <div className="title">
              실제 <span className="highlight">검은머리갈매기</span>는 어떤 새 일까요?
            </div>
            <div className="content">
              <div className="img_slider">
                <div>
                  <img src="/images/bird/original/istp-01.jpg" alt="검은머리갈매기 사진 1" />
                </div>
                <div>
                  <img src="/images/bird/original/istp-02.jpg" alt="검은머리갈매기 사진 2" />
                </div>
                <div>
                  <img src="/images/bird/original/istp-03.jpg" alt="검은머리갈매기 사진 3" />
                </div>
              </div>
              <ul className="type_point type_point_type_02">
                <li className="point_item">
                  국제적
                  <strong>멸종위기종</strong>
                  (취약)
                </li>
                <li className="point_item">
                  산업화로
                  <strong>서식지파괴</strong>
                </li>
                <li className="point_item">
                  주로 중국과
                  <strong>
                    인천에서
                    <br />
                    번식
                  </strong>
                </li>
              </ul>
              <a
                href="https://www.nie.re.kr/nie/pgm/edSpecies/view.do?menuNo=200127&speciesSn=36"
                className="btn_link w100"
                title="멸종위기 야생생물 검은머리갈매기 종정보"
              >
                <span className="btn_txt">국립생태원에서 자세히 알아보기</span>
                <span className="ico_btn ico_btn_arr_right_16"></span>
              </a>
              <div className="info_rights">
                <div>
                  <img src="/images/bird/bird_rights.png" alt="공공저작물 자유이용허락 표시(공공누리, KOGL) 제2유형" />
                </div>
                <div className="desc">
                  본 사이트에서 사용된 멸종위기 야생생물의 사진은 ‘국립생태원’에서 “공공저작물 자유이용허락 표시(공공누리, KOGL) 제2유형”을
                  이용하였으며, 해당 저작물은 ‘국립생태원, www.nie.re.kr’에서 무료로 다운받으실 수 있습니다.{' '}
                </div>
              </div>
            </div>
          </div>
          <div className="cont_block how_protect">
            <div className="title"></div>
            <div className="content">
              <ul className="type_point type_point_type_03">
                <li className="point_item">
                  <img src="/images/how1.png" alt="아무데나 쓰레기 버리지 않기" />
                  <strong>
                    아무데나 쓰레기
                    <br />
                    버리지 않기
                  </strong>
                </li>
                <li className="point_item">
                  <img src="/images/how2.png" alt="아무데나 쓰레기 버리지 않기" />
                  <strong>
                    등산로를 벗어난 <br />
                    산행 금지! 채집금지!
                  </strong>
                </li>
                <li className="point_item">
                  <img src="/images/how3.png" alt="아무데나 쓰레기 버리지 않기" />
                  <strong>
                    낚싯바늘, 낚싯줄 등<br />
                    수렵.. 조심..
                  </strong>
                </li>
                <li className="point_item">
                  <img src="/images/how4.png" alt="아무데나 쓰레기 버리지 않기" />
                  <strong>밀렵, 밀거래 금지!</strong>
                </li>
              </ul>
              <a href="https://blog.naver.com/mesns/220556838269" className="btn_link w100" title="야생동물 보호방법 환경부 블로그">
                <span className="btn_txt">환경부 블로그에서 더 자세히 알아보기</span>
                <span className="ico_btn ico_btn_arr_right_16"></span>
              </a>
            </div>
          </div>
          <div className="cont_block share">
            <div className="title">
              테스트 결과를 공유하고
              <br />
              <strong>멸종위기 야생동물 함께 지켜요!</strong>
            </div>
            <div className="content">
              <button className="btn_type_a btn_color_04">
                <span className="ico_btn ico_btn_url"></span>
                <span className="btn_txt">URL</span>
              </button>
              <button className="btn_type_a btn_color_02">
                <span className="ico_btn ico_btn_kakao"></span>
                <span className="btn_txt">카카오</span>
              </button>
            </div>
          </div>
        </section>
        <Link href="/" className="p-4 text-gray-500 hover:text-blue-600">
          메인으로
        </Link>
      </div>
    </div>
  );
};

export default page;
