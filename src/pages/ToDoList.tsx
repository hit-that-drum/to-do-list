import React from 'react';
import styled from 'styled-components';
import ToDoTable from './ToDoTable';
import Header from '../components/Header';
import CalendarButtonIcon from '../assets/calendar_button_icon.svg';
import MorningFilterIcon from '../assets/morning_filter_icon.svg';
import AfternoonFilterIcon from '../assets/afternoon_filter_icon.svg';
import NightFilterIcon from '../assets/night_filter_icon.svg';

const ToDoListWrapper = styled.div`
  position: relative;
`;
const Container = styled.div`
  border: 3px dashed blueviolet;
  padding: 40px 80px;
`;
const FilterButtonSection = styled.div``;
const RowTitleSection = styled.div``;

const ToDoList = () => {
  return (
    <ToDoListWrapper>
      <Header type="to-do-list" />
      <Container>
        <div className="profile-wrapper">profile</div>
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
              <button type="button">모든 요일의 루틴 보기</button>
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
          <ToDoTable />
        </div>
      </Container>
    </ToDoListWrapper>
  );
};

export default ToDoList;
