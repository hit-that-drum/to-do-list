/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';
import TrafficLight from './TrafficLight';
import { MockDataType } from '../../interfaces';
import AddTodoImg from '../../assets/add-todo.png';
import TodoImg from '../../assets/todo-img.svg';
import { ToDoSection, BottomSection } from './ToDoTableStyle';

const ToDoTable = ({ data }: { data: MockDataType[] }) => {
  console.log('table', data);
  const nowWeekNum = dayjs().day();
  const [tableData, setTableData] = useState(data[nowWeekNum - 1]);
  const { routines, todos } = tableData;
  console.log('tableData', tableData);
  const [numbering, setNumbering] = useState<number | null>(null);
  useEffect(() => {
    const routinesLen = routines ? routines.length : 0;
    const todosLen = todos ? todos.length : 0;
    setNumbering(routinesLen + todosLen);
  }, [data, routines, todos]);

  return (
    <div>
      {/* <ToDoSection>
        <div className="numbering-wrapper">
          <div>1</div>
        </div>
        <div className="timedetail-myday">
          <button className="timedetail" type="button">
            <p>5:30</p>
          </button>
          <button className="myday" type="button">
            <img src={TodoImg} alt="todo-img" />
            <p>기상시간 기록</p>
          </button>
        </div>
        <div>
          <button className="yoil" type="button">
            <p>월</p>
          </button>
          <button className="yoil" type="button">
            <p>화</p>
          </button>
          <button className="yoil" type="button">
            <p>수</p>
          </button>
          <button className="yoil" type="button">
            <p>목</p>
          </button>
          <button className="yoil" type="button">
            <p>금</p>
          </button>
          <button className="yoil" type="button">
            <p>토</p>
          </button>
          <button className="yoil" type="button">
            <p>일</p>
          </button>
        </div>
      </ToDoSection> */}
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
