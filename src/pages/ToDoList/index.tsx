/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { HtmlHTMLAttributes, useState } from 'react';
import dayjs from 'dayjs';
import { MockDataType } from '@interfaces/todo.interface';
import ToDoTable from './ToDoTable';
import Header from '../../components/Header';
import { ToDoListWrapper, Container, FilterButtonSection, RowTitleSection } from './indexStyle';
import CalendarButtonIcon from '../../assets/calendar_button_icon.svg';
import MorningFilterInactiveIcon from '../../assets/morning_filter_inactive_icon.svg';
import MorningFilterActiveIcon from '../../assets/morning_filter_active_icon.svg';
import AfternoonFilterInactiveIcon from '../../assets/afternoon_filter_inactive_icon.svg';
import AfternoonFilterActiveIcon from '../../assets/afternoon_filter_active_icon.svg';
import NightFilterInactiveIcon from '../../assets/night_filter_inactive_icon.svg';
import NightFilterActiveIcon from '../../assets/night_filter_active_icon.svg';
import ProfileSection from './ProfileSection';
import MockData from './mockdata';
// import { MockDataType, TfilterBtnState } from '../../interfaces';

interface TfilterBtnState {
  timeFilter: 'ALLTIME' | 'MORNING' | 'AFTERNOON' | 'NIGHT';
  typeFilter: 'ALLTYPE' | 'ROUTINE' | 'TODO';
  allWeekRoutine: boolean;
}

const weekdayNumber = [1, 2, 3, 4, 5, 6, 7];
const timeFilterButton = [
  { name: 'ALLTIME', className: 'alltime', desc: '모든시간', activeImg: null, inactiveImg: null },
  {
    name: 'MORNING',
    className: 'morning',
    desc: null,
    activeImg: MorningFilterActiveIcon,
    inactiveImg: MorningFilterInactiveIcon
  },
  {
    name: 'AFTERNOON',
    className: 'afternoon',
    desc: null,
    activeImg: AfternoonFilterActiveIcon,
    inactiveImg: AfternoonFilterInactiveIcon
  },
  { name: 'NIGHT', className: 'night', desc: null, activeImg: NightFilterActiveIcon, inactiveImg: NightFilterInactiveIcon }
];
const typeFilterButton = [
  { name: 'ALLTYPE', className: 'alltype', desc: '모두' },
  { name: 'ROUTINE', className: 'routine', desc: '루틴' },
  { name: 'TODO', className: 'todo', desc: '투두' }
];

const ToDoList = () => {
  // console.log('data', MockData);
  const [data, setData] = useState<MockDataType[]>(MockData);
  const [filterBtnState, setFilterBtnState] = useState<TfilterBtnState>({
    timeFilter: 'ALLTIME',
    typeFilter: 'ALLTYPE',
    allWeekRoutine: false
  });
  const { timeFilter, typeFilter, allWeekRoutine } = filterBtnState;
  const now = dayjs();

  const handleChangeFilter = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { name } = event.currentTarget;
    if (name === 'ALLTIME' || name === 'MORNING' || name === 'AFTERNOON' || name === 'NIGHT') {
      setFilterBtnState((prev) => {
        return {
          ...prev,
          timeFilter: name
        };
      });
    }
    if (name === 'ALLTYPE' || name === 'ROUTINE' || name === 'TODO') {
      setFilterBtnState((prev) => {
        return {
          ...prev,
          typeFilter: name
        };
      });
    }
    if (name === 'ALLDAYTYPE') {
      setFilterBtnState((prev) => {
        return {
          ...prev,
          allWeekRoutine: !allWeekRoutine
        };
      });
    }
  };

  return (
    <ToDoListWrapper>
      <Header type="to-do-list" />
      <Container>
        <ProfileSection />
        <div className="date-wrapper">
          <div>{`${now.day(1).format('YYYY년 MM월 DD일')} - ${now.day(7).format('YYYY년 MM월 DD일')}`}</div>
          <button type="button">
            <img src={CalendarButtonIcon} alt="calendar-button-icon" />
          </button>
        </div>
        <div className="routine-table-wrapper">
          <FilterButtonSection timeFilter={timeFilter} typeFilter={typeFilter} allWeekRoutine={allWeekRoutine}>
            <div className="time-filter-button">
              {timeFilterButton.map((el) => {
                return (
                  <button
                    key={`${el.name}_timefilter`}
                    type="button"
                    name={el.name}
                    onClick={(event) => handleChangeFilter(event)}
                  >
                    {el.desc ? <p className={el.className}>{el.desc}</p> : null}
                    {el.activeImg && el.inactiveImg ? (
                      <img
                        src={timeFilter === el.name ? el.activeImg : el.inactiveImg}
                        className={el.className}
                        alt={el.className}
                      />
                    ) : null}
                  </button>
                );
              })}
            </div>
            <div className="type-filter-button">
              {typeFilterButton.map((el) => {
                return (
                  <button
                    key={`${el.desc}_typefilter`}
                    type="button"
                    name={el.name}
                    onClick={(event) => handleChangeFilter(event)}
                  >
                    <p className={el.className}>{el.desc}</p>
                  </button>
                );
              })}
            </div>
            <div className="all-type-todo-filter-button">
              <button type="button" name="ALLDAYTYPE" onClick={(event) => handleChangeFilter(event)}>
                <p>모든 요일의 루틴 보기</p>
              </button>
            </div>
          </FilterButtonSection>
          <RowTitleSection>
            <div>시간/상황</div>
            <div>나의 하루</div>
            <div>
              {weekdayNumber.map((el) => {
                return (
                  <button className="date-btn" type="button" key={`${el}_date`}>
                    <p>{now.day(el).format('MM/DD')}</p>
                  </button>
                );
              })}
            </div>
          </RowTitleSection>
          <ToDoTable data={data} />
        </div>
      </Container>
    </ToDoListWrapper>
  );
};

export default ToDoList;
