/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';
import { TfilterBtnState } from '@interfaces/index.interface';
import TrafficLight from './TrafficLight';
import { MockDataType, RoutinesTodos } from '../../interfaces';
import AddTodoImg from '../../assets/add-todo.png';
import TodoImg from '../../assets/todo-img.svg';
import { ToDoSection, BottomSection, TimeDetailMyDay, YoilWrapper } from './ToDoTableStyle';

interface TRoutinesTodos {
  orderNo: number;
  taskType: 'ROUTINE' | 'TODO';
  timeType: 'MORNING' | 'AFTERNOON' | 'NIGHT' | null;
  appointedTime: string | null;
  description: string;
  status: boolean;
  statusDesc: string | null;
}

interface TWeekTableData {
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
  const [tableData, setTableData] = useState<TWeekTableData | null>(null);
  const [routinesTodos, setRoutinesTodos] = useState<TRoutinesTodos[]>([]);
  const [numbering, setNumbering] = useState<number | null>(null);

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
      if (weeknum === 1) {
        if (el.routines) {
          for (let i = 0; i < el.routines.length; i += 1) {
            weekTableData.MON.push(el.routines[i]);
          }
        }
        if (el.todos) {
          for (let i = 0; i < el.todos.length; i += 1) {
            weekTableData.MON.push(el.todos[i]);
          }
        }
      }
      if (weeknum === 2) {
        if (el.routines) {
          for (let i = 0; i < el.routines.length; i += 1) {
            weekTableData.TUE.push(el.routines[i]);
          }
        }
        if (el.todos) {
          for (let i = 0; i < el.todos.length; i += 1) {
            weekTableData.TUE.push(el.todos[i]);
          }
        }
      }
      if (weeknum === 3) {
        if (el.routines) {
          for (let i = 0; i < el.routines.length; i += 1) {
            weekTableData.WED.push(el.routines[i]);
          }
        }
        if (el.todos) {
          for (let i = 0; i < el.todos.length; i += 1) {
            weekTableData.WED.push(el.todos[i]);
          }
        }
      }
      if (weeknum === 4) {
        if (el.routines) {
          for (let i = 0; i < el.routines.length; i += 1) {
            weekTableData.THU.push(el.routines[i]);
          }
        }
        if (el.todos) {
          for (let i = 0; i < el.todos.length; i += 1) {
            weekTableData.THU.push(el.todos[i]);
          }
        }
      }
      if (weeknum === 5) {
        if (el.routines) {
          for (let i = 0; i < el.routines.length; i += 1) {
            weekTableData.FRI.push(el.routines[i]);
          }
        }
        if (el.todos) {
          for (let i = 0; i < el.todos.length; i += 1) {
            weekTableData.FRI.push(el.todos[i]);
          }
        }
      }
      if (weeknum === 6) {
        if (el.routines) {
          for (let i = 0; i < el.routines.length; i += 1) {
            weekTableData.SAT.push(el.routines[i]);
          }
        }
        if (el.todos) {
          for (let i = 0; i < el.todos.length; i += 1) {
            weekTableData.SAT.push(el.todos[i]);
          }
        }
      }
      if (weeknum === 0) {
        if (el.routines) {
          for (let i = 0; i < el.routines.length; i += 1) {
            weekTableData.SUN.push(el.routines[i]);
          }
        }
        if (el.todos) {
          for (let i = 0; i < el.todos.length; i += 1) {
            weekTableData.SUN.push(el.todos[i]);
          }
        }
      }
    });
    console.log('weekTableData', weekTableData);
    setTableData(weekTableData);
  }, [data]);

  useEffect(() => {
    setNowWeekNum(selectDay);
  }, [selectDay]);

  useEffect(() => {
    if (nowWeekNum === 1) {
      setNumbering(tableData ? tableData?.MON.length : 0);
      setRoutinesTodos(tableData ? tableData.MON : []);
    }
    if (nowWeekNum === 2) {
      setNumbering(tableData ? tableData?.TUE.length : 0);
      setRoutinesTodos(tableData ? tableData.TUE : []);
    }
    if (nowWeekNum === 3) {
      setNumbering(tableData ? tableData?.WED.length : 0);
      setRoutinesTodos(tableData ? tableData.WED : []);
    }
    if (nowWeekNum === 4) {
      setNumbering(tableData ? tableData?.THU.length : 0);
      setRoutinesTodos(tableData ? tableData.THU : []);
    }
    if (nowWeekNum === 5) {
      setNumbering(tableData ? tableData?.FRI.length : 0);
      setRoutinesTodos(tableData ? tableData.FRI : []);
    }
    if (nowWeekNum === 6) {
      setNumbering(tableData ? tableData?.SAT.length : 0);
      setRoutinesTodos(tableData ? tableData.SAT : []);
    }
    if (nowWeekNum === 0) {
      setNumbering(tableData ? tableData?.SUN.length : 0);
      setRoutinesTodos(tableData ? tableData.SUN : []);
    }
  }, [nowWeekNum, tableData]);

  useEffect(() => {
    console.log('aaaaaa', filterBtnState);
    if (filterBtnState.timeFilter === 'ALLTIME') {
      setRoutinesTodos(routinesTodos);
      setNumbering(routinesTodos.length);
    } else if (filterBtnState.timeFilter === 'MORNING') {
      const morning = routinesTodos.filter((el) => el.timeType === 'MORNING');
      setRoutinesTodos(morning);
      setNumbering(morning.length);
    } else if (filterBtnState.timeFilter === 'AFTERNOON') {
      const afternoon = routinesTodos.filter((el) => el.timeType === 'AFTERNOON');
      setRoutinesTodos(afternoon);
      setNumbering(afternoon.length);
    } else if (filterBtnState.timeFilter === 'NIGHT') {
      const night = routinesTodos.filter((el) => el.timeType === 'NIGHT');
      setRoutinesTodos(night);
      setNumbering(night.length);
    }

    if (filterBtnState.typeFilter === 'ALLTYPE') {
      console.log('ALLTYPE');
    } else if (filterBtnState.typeFilter === 'ROUTINE') {
      console.log('ROUTINE');
    } else if (filterBtnState.typeFilter === 'TODO') {
      console.log('TODO');
    }

    if (filterBtnState.allWeekRoutine) {
      console.log('TRUE');
    } else if (!filterBtnState.allWeekRoutine) {
      console.log('FALSE');
    }
  }, [filterBtnState]);

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
              <TimeDetailMyDay key={uuidv4()} routinesTodosIdx={idx} routinesTodosLen={routinesTodosLen}>
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
                    <YoilWrapper key={uuidv4()} nowWeekNumMatched={false} routinesTodosLen={routinesTodosLen}>
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
                    <YoilWrapper key={uuidv4()} nowWeekNumMatched={false} routinesTodosLen={routinesTodosLen}>
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
                    <YoilWrapper key={uuidv4()} nowWeekNumMatched={false} routinesTodosLen={routinesTodosLen}>
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
                    <YoilWrapper key={uuidv4()} nowWeekNumMatched={false} routinesTodosLen={routinesTodosLen}>
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
                    <YoilWrapper key={uuidv4()} nowWeekNumMatched={false} routinesTodosLen={routinesTodosLen}>
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
                    <YoilWrapper key={uuidv4()} nowWeekNumMatched={false} routinesTodosLen={routinesTodosLen}>
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
                    <YoilWrapper key={uuidv4()} nowWeekNumMatched={false} routinesTodosLen={routinesTodosLen}>
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
