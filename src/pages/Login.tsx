import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import BackgroundImg from '../assets/landing_img_1.png';
import Logo from '../assets/myroutine_icon.png';
import Kakao from '../assets/kakao_icon.svg';
import Google from '../assets/google_icon.png';
import Apple from '../assets/apple_icon.svg';
import Facebook from '../assets/facebook_icon.svg';
import Email from '../assets/email_icon.svg';
import Line from '../assets/line_icon.png';
import KakaoTalk from '../assets/kakaotalk_icon.svg';

const LoginWrapper = styled.div`
  position: relative;
  button {
    all: unset;
    cursor: pointer;
  }
`;
const Background = styled.img`
  z-index: -100;
  width: 100vw;
  height: 100%;
`;
const Container = styled.div`
  border: 3px dashed skyblue;
  text-align: center;
  display: flex;
  justify-content: center;
  z-index: 100;
  position: absolute;
  top: 20%;
  left: 35%;
  div:nth-child(1) {
    width: 420px;
  }
  .top-description {
    font-size: 28px;
    line-height: 40px;
  }
  .logo {
    margin: 100px 0;
    img {
      width: 120px;
      height: 51px;
    }
  }
  .major-sso-login {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    p {
      margin-left: 8px;
    }
    button {
      width: 320px;
      height: 24px;
      border-radius: 5px;
      padding: 16px;
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
    }
    button:nth-child(1) {
      background-color: rgb(254, 229, 0);
      img {
        width: 20px;
        height: 19px;
      }
    }
    button:nth-child(2) {
      border: 1px solid rgb(220, 224, 228);
      img {
        width: 22px;
        height: 22px;
      }
    }
    button:nth-child(3) {
      border: 1px solid rgb(220, 224, 228);
      img {
        width: 24px;
        height: 24px;
      }
    }
  }
  .minor-sso-login {
    font-size: 13px;
    color: rgb(123, 128, 133);
    display: flex;
    justify-content: center;
    margin-top: 20px;
    button {
      width: 117px;
      height: 35px;
      display: flex;
      justify-content: center;
    }
    img {
      width: 12px;
      height: 12px;
    }
    p {
      margin-left: 2px;
    }
    .seperator {
      height: 12px;
      border-right: 0.5px solid rgb(203, 207, 211);
      border-top-style: solid;
      border-bottom-style: solid;
      border-left-style: solid;
      border-top-color: rgb(203, 207, 211);
      border-bottom-color: rgb(203, 207, 211);
      border-left-color: rgb(203, 207, 211);
    }
    button:nth-child(5) {
      img {
        background-color: rgb(123, 128, 133);
      }
    }
  }
  .kakaotalk-inquiry {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: rgb(123, 128, 133);
    margin: 60px 0 0;
    button {
      width: 204px;
      height: 19px;
      border: 1px solid rgb(220, 224, 228);
      border-radius: 30px;
      padding: 10px 22px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    img {
      width: 17px;
      height: 16px;
    }
    p {
      margin-left: 5px;
      margin-bottom: 2px;
    }
  }
`;

const Login = () => {
  return (
    <LoginWrapper>
      <Background src={BackgroundImg} alt="background-img" />
      <Header type="login" />
      <Container>
        <div>
          <div className="top-description">
            <p>기분 좋은 매일을</p>
            <p>만드는 습관</p>
          </div>
          <div className="logo">
            <img src={Logo} alt="logo-img" />
          </div>
          <div>
            <div className="major-sso-login">
              <button type="button">
                <img src={Kakao} alt="kakao-login" />
                <p>카카오 로그인</p>
              </button>
              <button type="button">
                <img src={Google} alt="google-login" />
                <p>Google로 로그인</p>
              </button>
              <button type="button">
                <img src={Apple} alt="apple-login" />
                <p>Apple로 로그인</p>
              </button>
            </div>
            <div className="minor-sso-login">
              <button type="button">
                <img src={Facebook} alt="facebook-login" />
                <p>페이스북 로그인</p>
              </button>
              <div className="seperator" />
              <button type="button">
                <img src={Email} alt="email-login" />
                <p>이메일 로그인</p>
              </button>
              <div className="seperator" />
              <button type="button">
                <img src={Line} alt="line-login" />
                <p>라인 로그인</p>
              </button>
            </div>
            <div className="kakaotalk-inquiry">
              <button type="button">
                <img src={KakaoTalk} alt="kakaotalk-inquiry" />
                <p>카카오톡 채널 문의하기</p>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </LoginWrapper>
  );
};

export default Login;
