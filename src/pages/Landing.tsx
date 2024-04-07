import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import BackgroundImg from '../assets/background.png';

const LandingWrapper = styled.div`
  position: relative;

  .background-img {
    z-index: -100;
    background-size: cover;
    opacity: 50%;
  }
  .first-box {
    position: absolute;
    top: 30%;
    left: 50%;
  }
  h1 {
    width: 600px;
    margin: 20px 0px;
    font-size: 48px;
    line-height: 67px;
    letter-spacing: -0.02em;
    color: rgb(71, 91, 74);
  }
`;

const Landing = () => {
  return (
    <LandingWrapper>
      <div style={{ width: '80%' }}>
        <Header />
      </div>
      <div>
        <img src={BackgroundImg} className="background-img" alt="background-img" />
        <div className="first-box">
          <h1>
            기분좋은 매일을 만드는 습관,
            <span>마이루틴</span>
          </h1>
          <span>나의 루틴을 실천하며 알찬 하루를 보내봐요 🍒</span>
        </div>
      </div>
    </LandingWrapper>
  );
};

export default Landing;
