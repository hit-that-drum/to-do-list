import styled from 'styled-components';
import { TfilterBtnState } from '@interfaces/index.interface';

export const ToDoListWrapper = styled.div`
  position: relative;
  background-color: rgb(251, 251, 251);
`;

export const Container = styled.div`
  padding: 40px 80px;
  position: relative;
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
  .calendar-filterbtn-wrapper {
    display: flex;
    width: 850px;
  }
  .routine-table-wrapper {
    display: flex;
    align-items: center;
  }
`;

export const FilterButtonSection = styled.div<TfilterBtnState>`
  display: flex;
  .time-filter-button {
    width: 177px;
    height: 35px;
    .alltime {
      color: ${({ timeFilter }) => (timeFilter === 'ALLTIME' ? 'rgb(28, 172, 99)' : 'rgb(220, 224, 228)')};
    }
  }
  .type-filter-button {
    width: 129px;
    height: 35px;
    .alltype {
      color: ${({ typeFilter }) => (typeFilter === 'ALLTYPE' ? 'rgb(28, 172, 99)' : 'rgb(220, 224, 228)')};
    }
    .routine {
      color: ${({ typeFilter }) => (typeFilter === 'ROUTINE' ? 'rgb(28, 172, 99)' : 'rgb(220, 224, 228)')};
    }
    .todo {
      color: ${({ typeFilter }) => (typeFilter === 'TODO' ? 'rgb(28, 172, 99)' : 'rgb(220, 224, 228)')};
    }
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
    background-color: ${({ allWeekRoutine }) => (allWeekRoutine ? 'rgb(38, 222, 129)' : 'rgb(245, 246, 246)')};
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
      color: ${({ allWeekRoutine }) => (allWeekRoutine ? '#ffffff' : 'rgb(220, 224, 228)')};
    }
  }
`;

export const RowTitleSection = styled.div`
  display: flex;
  align-items: center;
  height: 24px;
  margin-top: 5px;
  margin-bottom: 5px;
  button {
    all: unset;
    cursor: pointer;
  }
  div {
    padding-right: 5px;
  }
  div:nth-child(1) {
    width: 130px;
    margin-left: 32px;
  }
  div:nth-child(2) {
    width: 250px;
  }
  div:nth-child(3) {
    width: 310px;
  }
  .date-btn {
    width: 40px;
    height: 24px;
    margin: 0px 2px;
    border-radius: 8px;
    background: rgb(38, 222, 129);
    justify-content: center;
    align-items: center;
    p {
      font-weight: bold;
      font-size: 10px;
      color: white;
      white-space: pre-line;
      text-align: center;
    }
  }
`;
