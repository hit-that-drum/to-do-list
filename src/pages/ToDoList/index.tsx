/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
// import React from 'react';
import styled from 'styled-components';
import ToDoTable from './ToDoTable';
import Header from '../../components/Header';
import CalendarButtonIcon from '../../assets/calendar_button_icon.svg';
import MorningFilterIcon from '../../assets/morning_filter_icon.svg';
import AfternoonFilterIcon from '../../assets/afternoon_filter_icon.svg';
import NightFilterIcon from '../../assets/night_filter_icon.svg';
import ProfileSection from './ProfileSection';
import MockData from './mockdata';
import { MockDataType } from '../../interfaces';

const ToDoListWrapper = styled.div`
  position: relative;
  background-color: rgb(251, 251, 251);
`;
const Container = styled.div`
  border: 3px dashed blueviolet;
  padding: 40px 80px;
  .date-wrapper {
    display: flex;
    flex: 1 1 0%;
    flex-flow: wrap;
    justify-content: flex-start;
    margin: 10px 0px;
    font-size: 16px;
    font-weight: bold;
    font-size: 18px;
    color: rgb(73, 77, 81);
    white-space: pre-line;
    button {
      all: unset;
      cursor: pointer;
    }
  }
`;
const FilterButtonSection = styled.div`
  display: flex;
  .time-filter-button {
    width: 177px;
    height: 35px;
  }
  .type-filter-button {
    width: 129px;
    height: 35px;
  }
  .time-filter-button,
  .type-filter-button {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 0.5px solid rgb(220, 224, 228);
    padding: 6.5px 12px 6.5px 16px;
    border-radius: 15px;
    box-sizing: border-box;
    background: white;
    margin-right: 13px;
    button {
      all: unset;
      cursor: pointer;
    }
    p {
      font-weight: bold;
      font-size: 13px;
      /* color: rgb(28, 172, 99); */
      color: rgb(221, 224, 228);
    }
    img {
      width: 20px;
      height: 20px;
    }
  }
  .all-type-todo-filter-button {
    padding: 7px 12px;
    display: flex;
    flex-direction: row;
    background-color: rgb(245, 246, 246);
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    border: 0.5px solid rgb(203, 207, 211);
    width: 120px;
    height: 21px;
    button {
      all: unset;
      cursor: pointer;
    }
    p {
      font-weight: bold;
      font-size: 13px;
      /* color: rgb(28, 172, 99); */
      color: rgb(221, 224, 228);
    }
  }
`;
const RowTitleSection = styled.div``;

const ToDoList = () => {
  console.log('data', MockData);
  const [data, setData] = useState<MockDataType[]>(MockData);

  return (
    <ToDoListWrapper>
      <Header type="to-do-list" />
      <Container>
        <ProfileSection />
        <div className="date-wrapper">
          <div>2024년 05월 06일 - 05월 12일</div>
          <button type="button">
            <img src={CalendarButtonIcon} alt="calendar-button-icon" />
          </button>
        </div>
        <div className="routine-table-wrapper">
          <FilterButtonSection>
            <div className="time-filter-button">
              <button type="button">
                <p>모든 시간</p>
              </button>
              <button type="button">
                <img src={MorningFilterIcon} alt="morning" />
              </button>
              <button type="button">
                <img src={AfternoonFilterIcon} alt="afternoon" />
              </button>{' '}
              <button type="button">
                <img src={NightFilterIcon} alt="night" />
              </button>
            </div>
            <div className="type-filter-button">
              <button type="button">
                <p>모두</p>
              </button>
              <button type="button">
                <p>루틴</p>
              </button>
              <button type="button">
                <p>투두</p>
              </button>
            </div>
            <div className="all-type-todo-filter-button">
              <button type="button">
                <p>모든 요일의 루틴 보기</p>
              </button>
            </div>
          </FilterButtonSection>
          <RowTitleSection>
            <div>시간/상황</div>
            <div>나의 하루</div>
            <div>
              <button type="button">
                <p>4/29</p>
              </button>
              <button type="button">
                <p>4/30</p>
              </button>
              <button type="button">
                <p>5/01</p>
              </button>
              <button type="button">
                <p>5/02</p>
              </button>
              <button type="button">
                <p>5/03</p>
              </button>
              <button type="button">
                <p>5/04</p>
              </button>
              <button type="button">
                <p>5/05</p>
              </button>
            </div>
          </RowTitleSection>
          <ToDoTable data={data} />
          {/* <ToDoTable /> */}
        </div>
      </Container>
    </ToDoListWrapper>
  );
};

export default ToDoList;
