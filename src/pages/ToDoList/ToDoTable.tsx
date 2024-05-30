/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';
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

const ToDoTable = ({ data }: { data: MockDataType[] }) => {
  const nowWeekNum = dayjs().day();
  const [tableData, setTableData] = useState(data[nowWeekNum - 1]);
  const { routines, todos } = tableData;
  const [routinesTodos, setRoutinesTodos] = useState<TRoutinesTodos[]>([]);
  const [numbering, setNumbering] = useState<number | null>(null);
  // console.log('routinesTodos', routinesTodos, numbering);
  useEffect(() => {
    const routinesData = routines ? [...routines] : [];
    const todosData = todos ? [...todos] : [];
    const routinesLen = routines ? routines.length : 0;
    const todosLen = todos ? todos.length : 0;
    setNumbering(routinesLen + todosLen);
    setRoutinesTodos([...routinesData, ...todosData]);
  }, [data, routines, todos]);

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
        <div>
          {Array(numbering)
            .fill(1)
            .map((el, idx) => {
              const routinesTodosLen = routinesTodos.length - 1;
              const statusEmoji = routinesTodos[idx]?.statusDesc ? routinesTodos[idx]?.statusDesc : '🍒';
              if (!el) return null;
              return (
                <YoilWrapper key={uuidv4()} routinesTodosIdx={idx} routinesTodosLen={routinesTodosLen}>
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
