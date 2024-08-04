import React, { useState } from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import dayjs from 'dayjs';

const CalendarWrapper = styled.div`
  width: 266px;
  min-height: 274px;
  background: #ffffff;
  border: 3px dashed darkblue;
  padding: 32px 22px;
  border-radius: 5px;

  .react-calendar {
    border: none;
  }

  .react-calendar__month-view__weekdays abbr {
    text-decoration: none;
  }

  .react-calendar__navigation button:enabled:hover {
    background-color: #ffffff;
  }
  .react-calendar__tile:enabled:hover {
    /* background-color: #ffffff; */
    background-color: #18cd72;
    color: #ffffff;
    border-radius: 50%;
  }

  .react-calendar__tile--active:enabled:hover {
    background-color: #18cd72;
  }

  .react-calendar__tile--active {
    background-color: #18cd72;
    border-radius: 50%;
  }

  .react-calendar__navigation button {
    color: #494d51;
    font-size: 18px;
    font-weight: 800;
  }

  .react-calendar__tile--now {
    border-radius: 20px;
    background-color: #18cd72;
    color: #ffffff;
  }
`;

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const TaskCalendar = () => {
  const today = new Date();
  const [date, setDate] = useState<Value>(today);

  const handleChange = (newDate: Value) => {
    setDate(newDate);
  };

  return (
    <CalendarWrapper>
      <Calendar
        value={date}
        onChange={handleChange}
        formatDay={(locale, day) => dayjs(day).format('D')}
        prev2Label={null}
        next2Label={null}
      />
    </CalendarWrapper>
  );
};

export default TaskCalendar;
