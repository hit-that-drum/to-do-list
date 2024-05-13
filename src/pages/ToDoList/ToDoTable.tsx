import React from 'react';
import styled from 'styled-components';
import TrafficLight from './TrafficLight';
import { MockDataType } from '../../interfaces';

const ToDoSection = styled.div``;

const BottomSection = styled.div`
  margin: 18px 0 30px;
  display: flex;
  .add-routine {
    all: unset;
    cursor: pointer;
    display: flex;
    padding: 4px 8px;
    width: 118.5px;
    color: #ffffff;
    border: 1px solid rgb(7, 116, 61);
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background: rgb(7, 116, 61);
    padding: 8px;
    border-width: 1px;
    font-weight: bold;
    font-size: 13px;
    white-space: pre-line;
  }
`;

const ToDoTable = ({ data }: { data: MockDataType[] }) => {
  console.log('data', data);
  // const ToDoTable = () => {
  return (
    <div>
      <ToDoSection>
        <div>
          <div>1</div>
        </div>
        <div>
          <button type="button">
            <p>5:30</p>
          </button>
          <button type="button">
            <p>기상시간 기록</p>
          </button>
        </div>
        <div>
          <button type="button">
            <p>월</p>
          </button>
          <button type="button">
            <p>화</p>
          </button>
          <button type="button">
            <p>수</p>
          </button>
          <button type="button">
            <p>목</p>
          </button>
          <button type="button">
            <p>금</p>
          </button>
          <button type="button">
            <p>토</p>
          </button>
          <button type="button">
            <p>일</p>
          </button>
        </div>
      </ToDoSection>
      <BottomSection>
        <button type="button" className="add-routine">
          <p>+ 루틴 추가하기 &nbsp;</p>
        </button>
        <TrafficLight data={data} />
      </BottomSection>
    </div>
  );
};

export default ToDoTable;
