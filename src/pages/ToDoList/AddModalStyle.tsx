import styled from 'styled-components';
import { Modal } from 'antd';

export const ModalSize = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Wrapper = styled(Modal)`
  color: rgb(71, 91, 74);
  position: absolute;
  left: 33%;
  border: 1px solid rgb(204, 204, 204);
  background: rgb(255, 255, 255);
  overflow: hidden auto;
  border-radius: 20px;
  outline: none;
  padding: 0px;
  box-shadow: rgba(24, 71, 23, 0.4) 0px 5px 25px;
  width: 510px;
  /* height: 678px; */
  /* max-width: 510px; */
  max-height: 100%;

  .ant-modal-header {
    width: 100%;
    height: 56px;
    padding: 7px 19px;
    text-align: center;
    border-bottom: 1px solid rgb(234, 238, 233);
    .ant-modal-title {
      font-size: 18px;
      color: rgb(71, 91, 74);
      font-weight: 500;
    }
  }

  button {
    all: unset;
    cursor: pointer;
    width: 95%;
    height: 44px;
    padding: 10px;
    border-radius: 5px;
    background: rgb(38, 222, 129);
    margin-top: 13px;
  }
  p {
    font-weight: 500;
    font-size: 18px;
    color: #ffffff;
    text-align: center;
  }
`;

export const StyledRow = styled.div<{ checked?: boolean }>`
  width: 95%;
  height: 56px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgb(234, 238, 233);

  span.add-title {
    font-size: 15px;
    line-height: 1.5;
    font-weight: 500;
    color: rgb(47, 75, 51);
  }

  .checkbox {
    .ant-checkbox-inner {
      display: inline-block;
      width: 20px;
      height: 20px;
      background-color: ${({ checked }) => (checked ? 'rgb(38, 222, 129)' : '#ffffff')};
      border: 1px solid rgb(204, 204, 204);
      border-radius: 3px;
      transition: all 150ms ease 0s;
    }
    :hover {
      border: none;
    }
  }

  .description {
    font-size: 15px;
    border: none;
    border-image: initial;
    outline: none;
    color: rgb(47, 75, 51);
    white-space: pre-line;
  }

  .emoji {
  }

  .todo-date {
  }

  .alarm {
  }

  .appointedTime {
    font-size: 15px;
    border: none;
    border-image: initial;
    outline: none;
    color: rgb(47, 75, 51);
    white-space: pre-line;
    text-align: end;
  }

  .routine-repeat-period {
  }

  .time-filter {
  }
  .filter-btn {
    display: flex;
  }
  button {
    all: unset;
    cursor: pointer;
    width: 74px;
    height: 40px;
    margin-left: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(237, 252, 221);
    border: 1px solid rgb(179, 234, 181);
    border-radius: 5px;
    font-size: 14px;
    color: rgb(73, 77, 81);
    white-space: pre-line;
    img {
      width: 24px;
      height: 24px;
      margin-right: 3px;
    }
  }

  .routine-startdate {
  }

  .todo-add-first {
  }
`;
