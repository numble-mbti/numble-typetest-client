import { TestData } from '@/types/types';
import Link from 'next/link';
import React, { useEffect } from 'react';
import CopyURLBtn from '../common/CopyURLBtn';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { shareKakao } from '@/api/util';

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
};

interface TestResultProps {
  result: TestData;
  mbti: string;
}

const TestResult = ({
  result: {
    content: {
      contents,
      compatibility: { best, worst },
    },
    endangeredGrand,
    name,
  },
  mbti,
}: TestResultProps) => {
  const currentUrl = window.location.href;

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div id="page_wrap" className="bird_test bird_result">
      <section>
        <div className="title_area">
          <div className="title">당신은</div>
          <div className="img_wrap">
            <img src={`/images/bird/mbti/${mbti.toLocaleLowerCase()}.png`} alt="테스트 결과 새 이미지" />
          </div>
        </div>
        <div className="cont_block">
          <div className="title">
            <span className="badge badge_type_01">멸종위기 {endangeredGrand}급</span>
            <div className="yuji">{name}</div>
          </div>
          <div className="content">
            <ul className="type_point type_point_type_01">
              {contents.map((text) => (
                <li className="point_item" key={text}>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="cont_block">
          <div className="content">
            <ul className="type_match">
              <li className="match_item">
                <div className="good badge badge_type_02">환상의 궁합</div>
                <div className="img_wrap">
                  <img
                    src={`/images/bird/mbti/${best.mbti_type.toLocaleLowerCase()}.png`}
                    alt="잘 맞는 새 이미지"
                    className=""
                    style={{ margin: 'auto' }}
                  />
                </div>
                <div className="type_name">{best.name}</div>
                <div className="desc">{best.description}</div>
              </li>
              <li className="match_item">
                <div className="bad badge badge_type_02">환장의 궁합</div>
                <div className="img_wrap">
                  <img
                    src={`/images/bird/mbti/${worst.mbti_type.toLocaleLowerCase()}.png`}
                    alt="잘 안 맞는 새 이미지"
                    className=""
                    style={{ margin: 'auto' }}
                  />
                </div>
                <div className="type_name">{worst.name}</div>
                <div className="desc">{worst.description}</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="cont_block">
          <div className="title">
            실제 <span className="highlight">{name}</span>는 어떤 새 일까요?
          </div>
          <div className="content">
            <Slider {...settings}>
              <div>
                <img src="/images/bird/original/istp-01.jpg" alt={name + '사진 1'} />
              </div>
              <div>
                <img src="/images/bird/original/istp-02.jpg" alt={name + '사진 2'} />
              </div>
              <div>
                <img src="/images/bird/original/istp-03.jpg" alt={name + '사진 3'} />
              </div>
            </Slider>
            <ul className="type_point type_point_type_02 mt-10">
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
            <CopyURLBtn currentUrl={currentUrl} />
            <button className="btn_type_a btn_color_02" onClick={() => shareKakao(currentUrl, 'kakao')}>
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
  );
};

export default TestResult;
