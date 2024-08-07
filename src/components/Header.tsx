import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import cherry from '../assets/cherry.svg';

const HeaderWrapper = styled.div<{ type: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  min-width: 760px;
  max-width: 1585px;
  height: 80px;
  padding: 0 100px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  background-color: ${({ type }) => (type === 'landing' ? 'transparent' : '#ffffff')};
  position: ${({ type }) => {
    if (type === 'landing') return 'sticky';
    if (type === 'login') return 'absolute';
    return null;
  }};
  z-index: ${({ type }) => (type === 'login' ? 999 : 0)};
  .icon-description {
    display: flex;
    align-items: center;
    font-size: 35px;
    font-family: 'Tilt Neon', sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-variation-settings: 'XROT' 0, 'YROT' 0;

    img {
      padding-right: 10px;
    }
  }
`;

const Icon = styled.img`
  width: 45px;
  height: 45px;
`;

const LoginBtn = styled.button`
  all: unset;
  cursor: pointer;
`;

interface HeaderProps {
  type: string;
}

const Header = ({ type }: HeaderProps) => {
  const navigate = useNavigate();

  const handleLoginPage = () => {
    navigate('/login');
  };

  return (
    <HeaderWrapper type={type}>
      <div className="icon-description">
        <Icon src={cherry} alt="header-icon" />
        <div>TO DO LIST</div>
      </div>
      <LoginBtn type="button" onClick={handleLoginPage}>
        로그인
      </LoginBtn>
    </HeaderWrapper>
  );
};

export default Header;
