/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GoogleplayIcon from '../assets/google_play_icon.png';
import AppStoreIcon from '../assets/app_store_icon.png';
import LandingImg_1 from '../assets/landing_img_1.png';
import LandingImg_2 from '../assets/landing_img_2.png';
// import LandingImg_3 from '../assets/landing_img_3.png';
// import LandingImg_4 from '../assets/landing_img_4.png';
// import LandingImg_5 from '../assets/landing_img_5.png';
// import LandingImg_6 from '../assets/landing_img_6.png';

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

// const ContentFeature = styled.div`
//   height: 450px;
//   display: flex;
// `;

const Landing = () => {
  return (
    <LandingWrapper>
      <Header />
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
      {/* <ContentFeature>
        <div className="first-feature">
          <div>
            <div>
              <h2>체계적인</h2>
              <h2>마이루틴 템플릿💫</h2>
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
              <h2>루틴 신호등🚥</h2>
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
              <h2>루틴 둘러보기💪🏻</h2>
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
              <h2>데일리 회고🖋️</h2>
            </div>
            <div>
              <p>7단계 이모지와 준비된 회고</p>
              <p>양식으로 편하게 내 루틴과</p>
              <p>하루를 돌아봐요!</p>
            </div>
          </div>
        </div>
      </ContentFeature> */}
      <Footer />
    </LandingWrapper>
  );
};

export default Landing;
