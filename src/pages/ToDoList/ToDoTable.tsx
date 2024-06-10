/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';
import { TfilterBtnState } from '@interfaces/index.interface';
import { MockDataType, RoutinesTodos } from '@interfaces/todo.interface';
import TrafficLight from './TrafficLight';
import AddTodoImg from '../../assets/add-todo.png';
import TodoImg from '../../assets/todo-img.svg';
import { ToDoSection, BottomSection, TimeDetailMyDay, YoilWrapper } from './ToDoTableStyle';

export interface TRoutinesTodos {
  orderNo: number;
  taskType: 'ROUTINE' | 'TODO';
  timeType: 'MORNING' | 'AFTERNOON' | 'NIGHT' | null;
  appointedTime: string | null;
  description: string;
  status: boolean;
  statusDesc: string | null;
}

export interface TWeekTableData {
  MON: TRoutinesTodos[];
  TUE: TRoutinesTodos[];
  WED: TRoutinesTodos[];
  THU: TRoutinesTodos[];
  FRI: TRoutinesTodos[];
  SAT: TRoutinesTodos[];
  SUN: TRoutinesTodos[];
}

const ToDoTable = ({
  data,
  selectDay,
  filterBtnState
}: {
  data: MockDataType[];
  selectDay: number | null;
  filterBtnState: TfilterBtnState;
}) => {
  const [nowWeekNum, setNowWeekNum] = useState<number | null>(selectDay);
  const [fullTableData, setFullTableData] = useState<TWeekTableData | null>(null);
  const [tableData, setTableData] = useState<TWeekTableData | null>(null);
  const [routinesTodos, setRoutinesTodos] = useState<RoutinesTodos[]>([]);
  const [numbering, setNumbering] = useState<number | null>(null);

  const numToDate = (num: number | null) => {
    if (num === 1) return 'MON';
    if (num === 2) return 'TUE';
    if (num === 3) return 'WED';
    if (num === 4) return 'THU';
    if (num === 5) return 'FRI';
    if (num === 6) return 'SAT';
    if (num === 0) return 'SUN';
    return 'MON';
  };

  // const numToDate = (num: number | null) => {
  //   const dateNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  //   return num ? dateNames[num % 7] : 'MON';
  // };

  useEffect(() => {
    const weekTableData: TWeekTableData = {
      MON: [],
      TUE: [],
      WED: [],
      THU: [],
      FRI: [],
      SAT: [],
      SUN: []
    };
    data.forEach((el) => {
      const weeknum = dayjs(el.day).day();
      const numtodate = numToDate(weeknum);
      if (el.routines) {
        el.routines.map((routine) => weekTableData[numtodate].push(routine));
      }
      if (el.todos) {
        el.todos.map((todo) => weekTableData[numtodate].push(todo));
      }
    });
    // console.log('weekTableData', weekTableData);
    setTableData(weekTableData);
    setFullTableData(weekTableData);
  }, [data]);

  useEffect(() => {
    setNowWeekNum(selectDay);
  }, [selectDay]);

  useEffect(() => {
    const numtodate = numToDate(nowWeekNum);
    setNumbering(tableData ? tableData?.[numtodate].length : 0);
    setRoutinesTodos(tableData ? tableData?.[numtodate] : []);
  }, [nowWeekNum, tableData]);

  useEffect(() => {
    const numtodate = numToDate(nowWeekNum);
    const filterTableData = fullTableData?.[numtodate];
    console.log('filterrr', filterBtnState.timeFilter, filterBtnState.typeFilter, filterBtnState.filterType);
    if (filterBtnState.filterType === 'TIME') {
      if (filterBtnState.timeFilter === 'ALLTIME') {
        console.log('ALLTIME');
        setNumbering(filterTableData ? filterTableData.length : 0);
        setRoutinesTodos(filterTableData || []);
      } else if (filterBtnState.timeFilter === 'MORNING') {
        console.log('MORNING');
        const filteredMorning = filterTableData?.filter((el) => el.timeType === 'MORNING');
        setNumbering(filteredMorning ? filteredMorning.length : 0);
        setRoutinesTodos(filteredMorning || []);
      } else if (filterBtnState.timeFilter === 'AFTERNOON') {
        console.log('AFTERNOON');
        const filteredAfternoon = filterTableData?.filter((el) => el.timeType === 'AFTERNOON');
        setNumbering(filteredAfternoon ? filteredAfternoon.length : 0);
        setRoutinesTodos(filteredAfternoon || []);
      } else if (filterBtnState.timeFilter === 'NIGHT') {
        console.log('NIGHT');
        const filteredNight = filterTableData?.filter((el) => el.timeType === 'NIGHT');
        setNumbering(filteredNight ? filteredNight.length : 0);
        setRoutinesTodos(filteredNight || []);
      }
    } else if (filterBtnState.filterType === 'TYPE') {
      if (filterBtnState.typeFilter === 'ALLTYPE') {
        console.log('ALLTYPE');
        setNumbering(filterTableData ? filterTableData.length : 0);
        setRoutinesTodos(filterTableData || []);
      } else if (filterBtnState.typeFilter === 'ROUTINE') {
        console.log('ROUTINE');
        const filteredRoutine = filterTableData?.filter((el) => el.taskType === 'ROUTINE');
        console.log('f', filteredRoutine);
        setNumbering(filteredRoutine ? filteredRoutine.length : 0);
        setRoutinesTodos(filteredRoutine || []);
      } else if (filterBtnState.typeFilter === 'TODO') {
        console.log('TODO');
        const filteredTodo = filterTableData?.filter((el) => el.taskType === 'TODO');
        setNumbering(filteredTodo ? filteredTodo.length : 0);
        setRoutinesTodos(filteredTodo || []);
      }
    }
  }, [filterBtnState, fullTableData, nowWeekNum]);

  // useEffect(() => {
  //   const numtodate = (wn: number | null) => {
  //     if (wn === 1) return 'MON';
  //     if (wn === 2) return 'TUE';
  //     if (wn === 3) return 'WED';
  //     if (wn === 4) return 'THU';
  //     if (wn === 5) return 'FRI';
  //     if (wn === 6) return 'SAT';
  //     if (wn === 0) return 'SUN';
  //     return 'MON';
  //   };
  //   const abc = numtodate(nowWeekNum);
  //   const filterTableData = fullTableData?.[abc];

  //   if (filterBtnState.allWeekRoutine) {
  //     console.log('true');
  //   } else if (!filterBtnState.allWeekRoutine) {
  //     console.log('false');
  //   }
  // }, [filterBtnState, fullTableData, nowWeekNum]);

  const handleStatusDesc = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const idx = Number(e.currentTarget.value);
    const originStatus = routinesTodos[idx].status;
    const dupArr = Array.from(routinesTodos);
    dupArr[idx] = { ...dupArr[idx], status: !originStatus };
    setRoutinesTodos(dupArr);
  };

  return (
    <div>
      <ToDoSection>
        <div>
          {Array(numbering)
            .fill(1)
            .map((el, idx) => {
              return (
                <div className="numbering" key={uuidv4()}>
                  <div>{idx + 1}</div>
                </div>
              );
            })}
        </div>
        <div className="routine-todo-wrapper">
          {routinesTodos?.map((el, idx) => {
            const routinesTodosLen = routinesTodos.length - 1;
            if (!el) return null;
            return (
              <TimeDetailMyDay
                key={uuidv4()}
                routinesTodosIdx={idx}
                routinesTodosLen={routinesTodosLen}
                routinesTodosStatus={el.status}
              >
                <button className="timedetail" type="button">
                  {el.appointedTime ? <p>{el.appointedTime}</p> : null}
                </button>
                <button className="myday" type="button">
                  {el.taskType === 'TODO' ? <img src={TodoImg} alt="todo-img" /> : null}
                  <p>{el.description}</p>
                </button>
              </TimeDetailMyDay>
            );
          })}
        </div>
        <div className="yoil-outer-wrapper" style={{ display: 'flex' }}>
          <div>
            {Array(numbering)
              .fill(1)
              .map((el, idx) => {
                const routinesTodosLen = routinesTodos.length - 1;
                const statusEmoji = routinesTodos[idx]?.statusDesc ? routinesTodos[idx]?.statusDesc : '🍒';
                if (!el) return null;
                if (nowWeekNum !== 1) {
                  return (
                    <YoilWrapper
                      key={uuidv4()}
                      nowWeekNumMatched={false}
                      routinesTodosIdx={idx}
                      routinesTodosLen={routinesTodosLen}
                    >
                      <button type="button" className="yoil">
                        {' '}
                      </button>
                    </YoilWrapper>
                  );
                }
                return (
                  <YoilWrapper key={uuidv4()} nowWeekNumMatched routinesTodosIdx={idx} routinesTodosLen={routinesTodosLen}>
                    <button value={idx} className="yoil" type="button" onClick={(e) => handleStatusDesc(e)}>
                      <p>{routinesTodos[idx]?.status ? statusEmoji : ''}</p>
                    </button>
                  </YoilWrapper>
                );
              })}
          </div>
          <div>
            {Array(numbering)
              .fill(1)
              .map((el, idx) => {
                const routinesTodosLen = routinesTodos.length - 1;
                const statusEmoji = routinesTodos[idx]?.statusDesc ? routinesTodos[idx]?.statusDesc : '🍒';
                if (!el) return null;
                if (nowWeekNum !== 2) {
                  return (
                    <YoilWrapper
                      key={uuidv4()}
                      nowWeekNumMatched={false}
                      routinesTodosIdx={idx}
                      routinesTodosLen={routinesTodosLen}
                    >
                      <button type="button" className="yoil">
                        {' '}
                      </button>
                    </YoilWrapper>
                  );
                }
                return (
                  <YoilWrapper key={uuidv4()} nowWeekNumMatched routinesTodosIdx={idx} routinesTodosLen={routinesTodosLen}>
                    <button value={idx} className="yoil" type="button" onClick={(e) => handleStatusDesc(e)}>
                      <p>{routinesTodos[idx]?.status ? statusEmoji : ''}</p>
                    </button>
                  </YoilWrapper>
                );
              })}
          </div>
          <div>
            {Array(numbering)
              .fill(1)
              .map((el, idx) => {
                const routinesTodosLen = routinesTodos.length - 1;
                const statusEmoji = routinesTodos[idx]?.statusDesc ? routinesTodos[idx]?.statusDesc : '🍒';
                if (!el) return null;
                if (nowWeekNum !== 3) {
                  return (
                    <YoilWrapper
                      key={uuidv4()}
                      nowWeekNumMatched={false}
                      routinesTodosIdx={idx}
                      routinesTodosLen={routinesTodosLen}
                    >
                      <button type="button" className="yoil">
                        {' '}
                      </button>
                    </YoilWrapper>
                  );
                }
                return (
                  <YoilWrapper key={uuidv4()} nowWeekNumMatched routinesTodosIdx={idx} routinesTodosLen={routinesTodosLen}>
                    <button value={idx} className="yoil" type="button" onClick={(e) => handleStatusDesc(e)}>
                      <p>{routinesTodos[idx]?.status ? statusEmoji : ''}</p>
                    </button>
                  </YoilWrapper>
                );
              })}
          </div>
          <div>
            {Array(numbering)
              .fill(1)
              .map((el, idx) => {
                const routinesTodosLen = routinesTodos.length - 1;
                const statusEmoji = routinesTodos[idx]?.statusDesc ? routinesTodos[idx]?.statusDesc : '🍒';
                if (!el) return null;
                if (nowWeekNum !== 4) {
                  return (
                    <YoilWrapper
                      key={uuidv4()}
                      nowWeekNumMatched={false}
                      routinesTodosIdx={idx}
                      routinesTodosLen={routinesTodosLen}
                    >
                      <button type="button" className="yoil">
                        {' '}
                      </button>
                    </YoilWrapper>
                  );
                }
                return (
                  <YoilWrapper key={uuidv4()} nowWeekNumMatched routinesTodosIdx={idx} routinesTodosLen={routinesTodosLen}>
                    <button value={idx} className="yoil" type="button" onClick={(e) => handleStatusDesc(e)}>
                      <p>{routinesTodos[idx]?.status ? statusEmoji : ''}</p>
                    </button>
                  </YoilWrapper>
                );
              })}
          </div>
          <div>
            {Array(numbering)
              .fill(1)
              .map((el, idx) => {
                const routinesTodosLen = routinesTodos.length - 1;
                const statusEmoji = routinesTodos[idx]?.statusDesc ? routinesTodos[idx]?.statusDesc : '🍒';
                if (!el) return null;
                if (nowWeekNum !== 5) {
                  return (
                    <YoilWrapper
                      key={uuidv4()}
                      nowWeekNumMatched={false}
                      routinesTodosIdx={idx}
                      routinesTodosLen={routinesTodosLen}
                    >
                      <button type="button" className="yoil">
                        {' '}
                      </button>
                    </YoilWrapper>
                  );
                }
                return (
                  <YoilWrapper key={uuidv4()} nowWeekNumMatched routinesTodosIdx={idx} routinesTodosLen={routinesTodosLen}>
                    <button value={idx} className="yoil" type="button" onClick={(e) => handleStatusDesc(e)}>
                      <p>{routinesTodos[idx]?.status ? statusEmoji : ''}</p>
                    </button>
                  </YoilWrapper>
                );
              })}
          </div>
          <div>
            {Array(numbering)
              .fill(1)
              .map((el, idx) => {
                const routinesTodosLen = routinesTodos.length - 1;
                const statusEmoji = routinesTodos[idx]?.statusDesc ? routinesTodos[idx]?.statusDesc : '🍒';
                if (!el) return null;
                if (nowWeekNum !== 6) {
                  return (
                    <YoilWrapper
                      key={uuidv4()}
                      nowWeekNumMatched={false}
                      routinesTodosIdx={idx}
                      routinesTodosLen={routinesTodosLen}
                    >
                      <button type="button" className="yoil">
                        {' '}
                      </button>
                    </YoilWrapper>
                  );
                }
                return (
                  <YoilWrapper key={uuidv4()} nowWeekNumMatched routinesTodosIdx={idx} routinesTodosLen={routinesTodosLen}>
                    <button value={idx} className="yoil" type="button" onClick={(e) => handleStatusDesc(e)}>
                      <p>{routinesTodos[idx]?.status ? statusEmoji : ''}</p>
                    </button>
                  </YoilWrapper>
                );
              })}
          </div>
          <div>
            {Array(numbering)
              .fill(1)
              .map((el, idx) => {
                const routinesTodosLen = routinesTodos.length - 1;
                const statusEmoji = routinesTodos[idx]?.statusDesc ? routinesTodos[idx]?.statusDesc : '🍒';
                if (!el) return null;
                if (nowWeekNum !== 0) {
                  return (
                    <YoilWrapper
                      key={uuidv4()}
                      nowWeekNumMatched={false}
                      routinesTodosIdx={idx}
                      routinesTodosLen={routinesTodosLen}
                    >
                      <button type="button" className="yoil">
                        {' '}
                      </button>
                    </YoilWrapper>
                  );
                }
                return (
                  <YoilWrapper key={uuidv4()} nowWeekNumMatched routinesTodosIdx={idx} routinesTodosLen={routinesTodosLen}>
                    <button value={idx} className="yoil" type="button" onClick={(e) => handleStatusDesc(e)}>
                      <p>{routinesTodos[idx]?.status ? statusEmoji : ''}</p>
                    </button>
                  </YoilWrapper>
                );
              })}
          </div>
        </div>
      </ToDoSection>
      <BottomSection>
        <div>
          <button type="button" className="add-routine">
            <p>+ 루틴 추가하기 &nbsp;</p>
          </button>
          <button type="button" className="add-todo">
            <img src={AddTodoImg} alt="add-todo-img" />
            <p>&nbsp;투두 추가하기</p>
          </button>
        </div>
        <TrafficLight data={data} />
      </BottomSection>
    </div>
  );
};

export default ToDoTable;
