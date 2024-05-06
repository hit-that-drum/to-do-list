import React from 'react';
import styled from 'styled-components';

const ToDoSection = styled.div``;

const ToDoTable = () => {
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
      <div>
        <div>
          <button type="button">
            <p>+ 루틴 추가하기</p>
          </button>
        </div>
        <div className="traffic-light-section">
          <div>light 월</div>
          <div>light 화</div>
          <div>light 수</div>
          <div>light 목</div>
          <div>light 금</div>
          <div>light 토</div>
          <div>light 일</div>
        </div>
      </div>
    </div>
  );
};

export default ToDoTable;
