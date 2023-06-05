import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin: 30px;
  padding: 15px 30px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  border-radius: 10px;
  display: block;
  border: 0px;
  font-weight: 700;
  box-shadow: 0px 0px 14px -7px #f09819;
  background-image: linear-gradient(45deg, #ff512f 0%, #f09819 51%, #ff512f 100%);
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  :hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }

  :active {
    transform: scale(0.95);
  }
`;

const MyComponent = () => {
  return (
    <div>
      <Button type="button">REACT</Button>
    </div>
  );
};

export default MyComponent;
