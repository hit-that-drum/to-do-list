import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Navigation, Pagination } from 'swiper/modules';
import Header from '../components/Header';
import Footer from '../components/Footer';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import GoogleplayIcon from '../assets/google_play_icon.png';
import AppStoreIcon from '../assets/app_store_icon.png';
import LandingImg_1 from '../assets/landing_img_1.png';
import LandingImg_2 from '../assets/landing_img_2.png';
import LandingImg_3 from '../assets/landing_img_3.png';
import LandingImg_4 from '../assets/landing_img_4.png';
import LandingImg_5 from '../assets/landing_img_5.png';
import LandingImg_6 from '../assets/landing_img_6.png';

const LandingWrapper = styled.div`
  width: 100%;
  color: rgb(71, 91, 74);
`;

const ContentBox = styled.div`
  .first-section {
    position: relative;
    height: 733px;
    img {
      width: 100%;
    }
  }
  .first-section-text {
    text-align: center;
    position: absolute;
    top: 25%;
    left: 20%;
    h1 {
      width: 600px;
      margin: 20px 0px;
      font-size: 48px;
      line-height: 67px;
      letter-spacing: -0.02em;
    }
    span:nth-child(1) {
      font-weight: 700;
    }
    p {
      font-size: 20px;
      margin: 30px 0;
    }
  }
  .app-icon {
    display: flex;
    justify-content: center;
    margin: 20px 0px 5px;
    img {
      width: 200px;
      height: 60px;
      padding: 0 10px;
    }
  }
  .second-section {
    background-color: rgb(250, 250, 250);
    height: 632px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 315px;
      height: 376px;
      margin-left: 65px;
    }
    h2 {
      font-size: 36px;
      font-weight: 600;
      line-height: 53px;
    }
    p {
      font-size: 20px;
      font-weight: 500;
      line-height: 1.5;
    }
  }
  .second-section-text {
    padding: 0 40px;
    div:nth-child(1) {
      margin-bottom: 60px;
    }
    div:nth-child(2) {
      margin: 20px 0;
    }
  }
`;

const ContentFeature = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow-x: hidden;
  padding: 40px;
  color: rgb(71, 91, 74);
  h2 {
    font-size: 36px;
    line-height: 53px;
  }
  .with-emoji {
    margin: 0 0 40px;
    font-weight: 700;
  }
  p {
    font-size: 20px;
    line-height: 30px;
  }
  .first-feature {
    background-color: rosybrown;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 35px 0px;
    padding: 25px 0px;
    img {
      margin-left: 100px;
      height: 380px;
    }
  }
  .second-feature {
    background-color: aliceblue;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 35px 0px;
    padding: 25px 0px;
    img {
      margin-right: 105px;
      height: 497px;
    }
  }
  .third-feature {
    background-color: lemonchiffon;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 35px 0px;
    padding: 25px 0px;
    img {
      margin-left: 100px;
      height: 317px;
    }
  }
  .fourth-feature {
    background-color: firebrick;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 35px 0px;
    padding: 25px 0px;
    img {
      margin-right: 100px;
      height: 373px;
    }
  }
`;

const SwiperWrapper = styled.div`
  height: 637px;
  color: rgb(71, 91, 74);

  .review-introduction {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    margin-top: 101px;
    text-align: center;
  }
`;

const SlideView = styled.div`
  width: 450px;
  height: 204px;
  padding: 35px 30px;
  background-color: violet;
`;

interface TStyleSwiper {
  slideidx: number;
}

const StyleSwiper = styled(Swiper)<TStyleSwiper>`
  .swiper-button-prev,
  .swiper-button-next {
    color: #afb3b8;
  }
  .swiper-button-prev:after {
    padding-left: 40px;
    font-size: 30px;
  }
  .swiper-button-next:after {
    padding-right: 40px;
    font-size: 30px;
  }
  .swiper-pagination-bullet-active {
    background: #606366;
  }

  .swiper-button-prev .swiper-button-disabled {
    visibility: hidden;
  }
  .swiper-button-next .swiper-button-disabled {
    visibility: hidden;
  }
`;

const Landing = () => {
  const swiper = useRef(null);
  const [slideIdx, setSlideIdx] = useState<number | unknown>(0);
  const handleSlideChange = (swiperInfo: SwiperClass) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    setSlideIdx(swiperInfo.activeIndex);
  };

  return (
    <LandingWrapper>
      <Header type="landing" />
      <ContentBox>
        <div className="first-section">
          <img src={LandingImg_1} alt="landing-img-1" />
          <div className="first-section-text">
            <h1>
              기분좋은 매일을 만드는 습관,
              <span>마이루틴</span>
            </h1>
            <p>나의 루틴을 실천하며 알찬 하루를 보내봐요 🍒</p>
            <div className="app-icon">
              <a href="https://play.google.com/store/apps/details?id=com.minding.myroutine" target="_blank" rel="noreferrer">
                <img src={GoogleplayIcon} alt="googleplay-icon" />
              </a>
              <a
                href="https://apps.apple.com/kr/app/%EB%A7%88%EC%9D%B4%EB%A3%A8%ED%8B%B4-%EB%A3%A8%ED%8B%B4-%ED%88%AC%EB%91%90-%ED%94%8C%EB%9E%98%EB%84%88-%EC%95%8C%EB%9E%8C-%EC%9C%84%EC%A0%AF-%EC%9B%8C%EC%B9%98-%EB%94%94%EB%8D%B0%EC%9D%B4/id1518956326"
                target="_blank"
                rel="noreferrer"
              >
                <img src={AppStoreIcon} alt="appstore-icon" />
              </a>
            </div>
          </div>
        </div>
      </ContentBox>
      <ContentBox>
        <div className="second-section">
          <div className="second-section-text">
            <div>
              <h2>하루하루를 더 알차게 보내고 싶나요?</h2>
              <h2>결심은 하지만 꾸준히 지키기 힘든가요?</h2>
            </div>
            <div>
              <p>내가 원하는 습관을 일상에 녹이고</p>
              <p>기분 좋은 매일을 살아봐요!</p>
            </div>
          </div>
          <img src={LandingImg_2} alt="landing-img-2" />
        </div>
      </ContentBox>
      <ContentFeature>
        <div className="first-feature">
          <div>
            <div>
              <h2>체계적인</h2>
              <h2 className="with-emoji">마이루틴 템플릿💫</h2>
            </div>
            <div>
              <p>템플릿으로 하루 루틴을 체계적</p>
              <p>으로 관리하고 편하게 실천해요!</p>
            </div>
          </div>
          <img src={LandingImg_3} alt="landing-img-3" />
        </div>
      </ContentFeature>
      <ContentFeature>
        <div className="second-feature">
          <img src={LandingImg_4} alt="landing-img-4" />
          <div>
            <div>
              <h2>하루/한 주가</h2>
              <h2>한 눈에 보이는</h2>
              <h2 className="with-emoji">루틴 신호등🚥</h2>
            </div>
            <div>
              <p>빨노초 신호등으로 하루가 한 눈에</p>
              <p>보여요! 한 주간 초록불이 가득하면</p>
              <p>뿌듯함은 2배 :)</p>
            </div>
          </div>
        </div>
      </ContentFeature>
      <ContentFeature>
        <div className="third-feature">
          <div>
            <div>
              <h2>실천 동기를</h2>
              <h2>자극하는</h2>
              <h2 className="with-emoji">루틴 둘러보기💪🏻</h2>
            </div>
            <div>
              <p>다른 루티너들의 루틴과 회고를</p>
              <p>보며 긍정적인 자극을 받아요!</p>
            </div>
          </div>
          <img src={LandingImg_5} alt="landing-img-5" />
        </div>
      </ContentFeature>
      <ContentFeature>
        <div className="fourth-feature">
          <img src={LandingImg_6} alt="landing-img-6" />
          <div>
            <div>
              <h2>오늘 하루를</h2>
              <h2>돌아보는</h2>
              <h2 className="with-emoji">데일리 회고🖋️</h2>
            </div>
            <div>
              <p>7단계 이모지와 준비된 회고</p>
              <p>양식으로 편하게 내 루틴과</p>
              <p>하루를 돌아봐요!</p>
            </div>
          </div>
        </div>
      </ContentFeature>
      <SwiperWrapper>
        <div className="review-introduction">이미 많은 사람들이 마이루틴으로 만족스러운 하루를 만들어가고 있습니다👏</div>
        <StyleSwiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={(swiperChange: SwiperClass) => handleSlideChange(swiperChange)}
          slideidx={slideIdx}
          ref={swiper}
        >
          <SwiperSlide>
            <SlideView>
              <div>
                <span className="review-name">이보미</span>
                <span className="review-routiner">루티너님</span>
              </div>
              <div>
                <span>
                  매일 해야겠다고 결심한 루틴들을 하루하루 체크해가다 보면 성취감을 느낄 수 있고, 그 과정이 뿌듯한 하루를 보낼 수
                  있도록 도와줘요. 루틴 신호등을 초록색으로 계속 유지하고 싶은 마음이
                </span>
                <span className="review-text-bold">루틴을 지속해나가야 한다는 큰 동기부여</span>
                <span>가 됩니다!</span>
              </div>
            </SlideView>
          </SwiperSlide>
          <SwiperSlide>
            <SlideView>
              <div>
                <span className="review-name">라니</span>
                <span className="review-routiner">루티너님</span>
              </div>
              <div>
                <span>
                  마이루틴은 하루하루를 알차게 살아가고 싶은 분들께 참 좋은 어플 같아요. 인생을 살다보면 헛되이 흘러보내는 시간이
                  아깝기 마련인데,
                </span>
                <span className="review-text-bold">
                  {' '}
                  마이루틴을 통해서 시간을 꽉꽉 나다운 시간으로 채울수가 있어서 매일이 풍요로워지는 기분이 들어요!
                </span>
                <span>혼자했을 때는 자칫 흐뜨러짐이 금방 오기 마련인데,</span>
                <span className="review-text-bold">
                  {' '}
                  다른 분들의 루틴을 보며 힘도 얻고 영감을 얻을 수 있어서 오래할 수 있었어요.
                </span>
                <span>
                  특히 친한 친구가 있다면 더더욱 재밌고 자꾸 훔쳐보게 되더라구요! 인생의 큰 그림을 그리고 싶은 분들께 참 좋은,
                  마이루틴입니다❤
                </span>
              </div>
            </SlideView>
          </SwiperSlide>
          <SwiperSlide>
            <SlideView>
              <div>
                <span className="review-name">김재윤</span>
                <span className="review-routiner">루티너님</span>
              </div>
              <div>
                <span>
                  평소 생활패턴이라는 말이 무색할 정도로 불규칙적인 삶을 살았습니다. 과음과 늦잠, 지각이 잦았고 어떤 다짐을 해도
                  오래가지 못했습니다. 불규칙적이고 건강하지 못한 생활에 대해 경각심을 가지게 된 찰나에 지인을 통해 마이루틴
                  프로젝트를 소개받게 되었습니다. 나도 루틴한 생활을 하면 좋겠다고 생각되어 신청했습니다. 처음에는 어떤걸 해야할지
                  몰라 어떤 루틴들을 해야할지 막막했지만 다른 참여자분들의 시트를 참고하며 하나하나 만들어나갔습니다.
                </span>
                <span className="review-text-bold">
                  {' '}
                  하기 쉬운것 부터 채우고 하루하루 실행해고 동그라미를 치다보니 뿌듯하기도 하고 생활에 패턴이 생기는것 같아 재미도
                  있었습니다. 좀 적응이 되자 평소에 꼭 해야겠다고 생각되던 회사와 업무에 관련된 루틴도 하기 시작했습니다.
                </span>
                <span>
                  {' '}
                  평소에 일하면서 이렇게 일하는 습관을 가지면 어떨까? 효율적이지 않을까? 생각만 많이 했다면, 직접 루틴에 넣고
                  해보니 그것이 진짜 효율적인지 아니면 굳이 필요없는 일인지 구분할 수 있었습니다. 영업직 업무 특성상 코로나 이슈로
                  일을 제대로 못하게 되고 업무관련 루틴을 아예 하지 못하게 되어 아쉬웠습니다. 하지만 재택근무를 하고 시트를
                  체크하지 못하는 상황에도 아침에 일어나면 해야할 루틴들이 머릿속에 떠오르고 자동으로 실행하는 제 모습에 놀라기도
                  했습니다.
                </span>
                <span className="review-text-bold">
                  {' '}
                  처음에는 동그라미를 치기 위해 했다면 어느새 루틴들이 내 삶의 일부가 되어있는거 같아서 좋았습니다. 앞으로도
                  마이루틴을 통해 나의 생활패턴이나 업무방식에 대한 고민을 많이 해볼 예정입니다.
                </span>
              </div>
            </SlideView>
          </SwiperSlide>
          <SwiperSlide>
            <SlideView>
              <div>
                <span className="review-name">김민주</span>
                <span className="review-routiner">루티너님</span>
              </div>
              <div>
                <span>[내가 채우는 하루]</span>
                <span>
                  저는 시간개념이 약한 편이라 항상 시간에 끌려다니곤 하였습니다. 하루하루가 어떻게 흘러가는지도 모르는 채 바쁘게
                  살면 언제나 코앞에 연말이 와있곤 했어요. 마이루틴으로 습관들을 관리하다보니 나한테 맞지 않는 습관은 무엇인지 한
                  눈에 파악하기 쉬워서 제가 할 수 있는 습관들로 채울 수 있는 루틴이 만들어졌습니다. 의미없는 시간으로 보내던 자기
                  전의 시간에 그 날 채우지 못한 습관들을 끝내면서 시간을 더 의미있게 보낼 수 있었습니다. 꾸준히 지키는 습관이
                  생기면 그 보람에 더 힘을 내서 할 수 있던 것 같습니다 :)
                </span>
                <span className="review-text-bold">
                  하루하루 루틴을 체크하다 보면 시간을 흘려보내는 게 아니라 내가 관리할 수 있어서 정말 좋았습니다.
                </span>
              </div>
            </SlideView>
          </SwiperSlide>
          <SwiperSlide>
            <SlideView>
              <div>
                <span className="review-name">원묘</span>
                <span className="review-routiner">루티너님</span>
              </div>
              <div>
                <span>습관이 아니라 루틴!</span>
                <span>
                  우리가 습관의 노예라는 말을 오래전부터 들었다. 그래서 습관을 만들기 위해 부단히 애썼다. 66일간은 지속해야 습관이
                  형성된다는 심리학자들의 실험 결과를 듣고 실행해 보았다. 그러나 내게 66일은 너무 긴 시간이었다. 그러던 때에
                  동생의 추천으로 마이루틴 서비스를 만났다. 하루의 일상 속에 내가 만들고 싶은 습관을 배치해보았다. 어떤 것은 잘
                  맞았고, 어떤 것은 힘들었다. 그래서 다시 재조정을 하며 루틴 서비스를 이용중이다.
                </span>
                <span className="review-text-bold">
                  놀랍게도 나는 습관을 만들어야 한다는 강박을 내려 놓은 채 습관을 만들어 가고 있었다. 마이루틴은 자연스럽게 나를
                  돌아보고 내 삶을 바꿀수 있는 서비스 같다. 무엇보다 다른 사람들의 루틴을 보며 영감을 받고, 때로는 응원을 받기도
                  하는게 좋다.
                </span>
                <span>
                  {' '}
                  함께 한다는 느낌이 마이루틴 서비스의 장점 같다. 무언가 확 바꿔야 한다거나 습관을 만들어야겠다는 강박이 있는
                  분들에게 루틴 서비스를 추천한다.
                </span>
              </div>
            </SlideView>
          </SwiperSlide>
          <SwiperSlide>
            <SlideView>
              <div>
                <span className="review-name">신가인</span>
                <span className="review-routiner">루티너님</span>
              </div>
              <div>
                <span>자기만의 루틴을 만들고 하루를 뿌듯하게 보낼 수 있게 되었어요.</span>
                <span className="review-text-bold">하루를 좀 더 알차게 그리고 생각하는대로 보내길 원하시는 분</span>
                <span>들이라면 꼭 사용해보시길 바래요!</span>
              </div>
            </SlideView>
          </SwiperSlide>
          <SwiperSlide>
            <SlideView>
              <div>
                <span className="review-name">박은주</span>
                <span className="review-routiner">루티너님</span>
              </div>
              <div>
                <span className="review-text-bold">
                  계획세우기 좋아하시는 분, 시간을 알차게 쓰길 원하시는 분, 좀 더 나은 미래를 원하시는 분
                </span>
                <span>
                  들에게 도움이 되는 서비스라고 생각해요 ㅎㅎ 매일매일 신호등으로 내 상태를 체크할 수 있고 초록불을 연속으로
                  달성하면 배지를 주니 자극도 생기게 됩니다. 배지달린 사람들 루틴을 보면서 어 나도 따라해봐야겠다 하는 계획들도
                  가져와 발전시킬 수 있구요 ㅎㅎ 아침 저녁으로 알람을 줘서 아 그래 하나라도 더 하고 자자하고 자극을 시켜줍니다. 또
                  쉬어가기 기능이있어서 주3회 주5회 이런식으로 계획하기도 편해요. 처음엔 과하게 계획을 잡기도 하고 욕심도 부렸는데
                  거듭할수록 목표를 명확하게 세우기도 하고 다른 사람의 루틴을 참고하면서 나한테 맞는 계획을 세울 수 있는것 같아요.
                  ^^ 루틴 세워서 꾸준히만 해도 성장하는 모습을 볼수있어요.
                </span>
              </div>
            </SlideView>
          </SwiperSlide>
          <SwiperSlide>
            <SlideView>
              <div>
                <span className="review-name">짓구</span>
                <span className="review-routiner">루티너님</span>
              </div>
              <div>
                <span className="review-text-bold">
                  마이루틴을 쓰면서 어떤 하루를 보내고 싶은지 미리 고민하고 그대로 실천하게 돼서 좋았어요!
                </span>
                <span>마음먹은대로 하지 못 한 날이 있어도 같이 도전 중인 분들의 시트를 보면서 재도전하기도 쉬웠어요.</span>
              </div>
            </SlideView>
          </SwiperSlide>
          <SwiperSlide>
            <SlideView>
              <div>
                <span className="review-name">다솜이네누나</span>
                <span className="review-routiner">루티너님</span>
              </div>
              <div>
                <span>마이루틴 쓰면서 그냥</span>
                <span className="review-text-bold">모른 척 하고 넘어갈 수 있었던 습관들을 놓치지 않고 할 수 있어서</span>
                <span>좋아요. 한 주 지나고 오 이번주 꽤 괜찮았네! 다음엔 이것도 해보고 싶다! 하는 게 늘어나니</span>
                <span className="review-text-bold">좀 더 나은 내가 되고 나은 삶을 살 수 있을 것 같아서 기대돼요.</span>
              </div>
            </SlideView>
          </SwiperSlide>
          <SwiperSlide>
            <SlideView>
              <div>
                <span className="review-name">최시찬</span>
                <span className="review-routiner">루티너님</span>
              </div>
              <div>
                <span>평소 나쁜 습관을 마이루틴이 바로잡아주며</span>
                <span className="review-text-bold">좋은 습관을 하나하나 만들어 가서 삶의 질이 달라지고 정말 좋았습니다.</span>
                <span>이렇게 좋은 습관을 하나하나 만들어 갈 수 있도록 도와준 마이루틴 최고예요!!😁😁</span>
              </div>
            </SlideView>
          </SwiperSlide>
        </StyleSwiper>
      </SwiperWrapper>
      <Footer />
    </LandingWrapper>
  );
};

export default Landing;
