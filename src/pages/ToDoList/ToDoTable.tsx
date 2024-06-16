/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState, useCallback } from 'react';
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';
import { TfilterBtnState } from '@interfaces/index.interface';
import { MockDataType, RoutinesTodos } from '@interfaces/todo.interface';
import TrafficLight from './TrafficLight';
import AddTodoImg from '../../assets/add-todo.png';
import TodoImg from '../../assets/todo-img.svg';
import { ToDoSection, BottomSection, TimeDetailMyDay, YoilWrapper } from './ToDoTableStyle';
import AddModal from './AddModal';

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
  [key: string]: TRoutinesTodos[];
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
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [titleModal, setTitleModal] = useState<string>('');

  // console.log('routines', routinesTodos);
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

  // type DayOfWeek = 'SUN' | 'MON' | 'TUE' | 'WED' | 'THU' | 'FRI' | 'SAT';
  //
  // const numToDate: (num: number | null) => DayOfWeek = useCallback((num) => {
  //   const dateNames: DayOfWeek[] = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  //   return num ? dateNames[num % 7] : 'MON';
  // }, []);

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

    const filteredTableData = filterTableData?.filter((el) => {
      const isTimePassed = filterBtnState.timeFilter === 'ALLTIME' || el.timeType === filterBtnState.timeFilter;
      const isTypePassed = filterBtnState.typeFilter === 'ALLTYPE' || el.taskType === filterBtnState.typeFilter;

      return isTimePassed && isTypePassed;
    });

    setNumbering(filteredTableData ? filteredTableData.length : 0);
    setRoutinesTodos(filteredTableData || []);
  }, [filterBtnState, fullTableData, nowWeekNum]);

  const handleStatusDesc = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const idx = Number(e.currentTarget.value);
    const originStatus = routinesTodos[idx].status;
    const dupArr = Array.from(routinesTodos);
    dupArr[idx] = { ...dupArr[idx], status: !originStatus };
    setRoutinesTodos(dupArr);
  };

  const showModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log('handleModal', e.currentTarget.name);
    const { name } = e.currentTarget;
    if (name === 'add-routine') {
      setTitleModal('루틴 추가하기');
    } else if (name === 'add-todo') {
      setTitleModal('투두 추가하기');
    }
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
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
          {Array.from(Array(6).keys()).map((index: number) => {
            return (
              <div key={uuidv4()}>
                {Array(numbering)
                  .fill(1)
                  .map((el, idx) => {
                    const routinesTodosLen = routinesTodos.length - 1;
                    const statusEmoji = routinesTodos[idx]?.statusDesc ? routinesTodos[idx]?.statusDesc : '🍒';
                    if (!el) return null;
                    if (nowWeekNum !== index + 1) {
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
      </ToDoSection>
      <BottomSection>
        <div>
          <button name="add-routine" type="button" className="add-routine" onClick={(e) => showModal(e)}>
            <p>+ 루틴 추가하기 &nbsp;</p>
          </button>
          <button name="add-todo" type="button" className="add-todo" onClick={(e) => showModal(e)}>
            <img src={AddTodoImg} alt="add-todo-img" />
            <p>&nbsp;투두 추가하기</p>
          </button>
        </div>
        <TrafficLight data={data} />
      </BottomSection>
      <AddModal title={`${titleModal}`} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} />
    </div>
  );
};

export default ToDoTable;
