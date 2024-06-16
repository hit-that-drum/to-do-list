/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { ModalProps, Checkbox } from 'antd';
import type { CheckboxProps } from 'antd';
// import BaseModal from '../../components/BaseModal';
import { v4 as uuidv4 } from 'uuid';
import { ModalSize, Wrapper, StyledRow } from './AddModalStyle';
// import { RoutinesTodos } from '../../interfaces/todo.interface';
import MorningBtnImg from '../../assets/morning_filter_active_icon.svg';
import AfternoonBtnImg from '../../assets/afternoon_filter_active_icon.svg';
import NightBtnImg from '../../assets/night_filter_active_icon.svg';

export type DefaultModalProps = ModalProps;

export interface TRoutinesTodos {
  orderNo: number;
  taskType: 'ROUTINE' | 'TODO';
  timeType: 'MORNING' | 'AFTERNOON' | 'NIGHT' | null;
  appointedTime: string | null;
  description: string;
  status: boolean;
  statusDesc: string | null;
  alarm: boolean;
}

const AddModal = ({ title, open, onOk, onCancel }: DefaultModalProps) => {
  const [titleType, setTitleType] = useState<string | undefined>('');
  const routineType = titleType === '루틴';
  const todoType = titleType === '투두';
  const [newData, setNewData] = useState<TRoutinesTodos>({
    orderNo: 0,
    taskType: titleType === '루틴' ? 'ROUTINE' : 'TODO',
    timeType: null,
    appointedTime: null,
    description: '',
    status: false,
    statusDesc: null,
    alarm: false
  });

  useMemo(() => {
    setTitleType(title?.toString().split(' ')[0]);
  }, [title]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('amnesia', e.target);
    const tempData = {
      orderNo: 0,
      taskType: titleType === '루틴' ? 'ROUTINE' : 'TODO',
      timeType: null,
      appointedTime: '',
      description: '',
      status: false,
      statusDesc: null
    };
    const { name } = e.target;
    if (name === 'description') {
      tempData[name] = e.target.value;
    } else if (name === 'appointedTime') {
      console.log('aaa', e.target.value);
      tempData[name] = e.target.value;
    }
  };

  const handleCheckbox: CheckboxProps['onChange'] = (e) => {
    const { name } = e.target;
    console.log('checkbox', name, e.target.checked);
    if (name === 'alarm') {
      setNewData((prev) => {
        return {
          ...prev,
          alarm: e.target.checked
        };
      });
    } else if (name === 'todo-add-first') {
      setNewData((prev) => {
        return {
          ...prev,
          orderNo: 1
        };
      });
    }
  };

  return (
    <ModalSize>
      <Wrapper
        title={title}
        open={open}
        onOk={onOk}
        onCancel={onCancel}
        footer={[
          <button key={uuidv4()} type="button" className="footer">
            <p>{titleType} 추가하기</p>
          </button>
        ]}
      >
        <div>
          <StyledRow>
            <input
              className="description"
              type="text"
              name="description"
              onChange={(e) => handleChange(e)}
              placeholder={`${titleType || ''} 이름`}
            />
          </StyledRow>
          <StyledRow className="emoji">
            <span className="add-title">{titleType} 수행 이모지</span>
            <span>✅</span>
          </StyledRow>
          {todoType ? (
            <StyledRow className="todo-date">
              <span className="add-title">날짜</span>
              <span>✅</span>
            </StyledRow>
          ) : null}
          <StyledRow className="alarm" checked={newData.alarm}>
            <span className="add-title">{titleType} 알람</span>
            <Checkbox className="checkbox" name="alarm" onChange={(e) => handleCheckbox(e)} checked={newData.alarm} />
          </StyledRow>
          <StyledRow className="appointedTime">
            <span className="add-title">언제 할래요?</span>
            <input
              className="appointedTime"
              type="text"
              name="appointedTime"
              onChange={(e) => handleChange(e)}
              placeholder="ex) 8:00 / 출근길 / ALL"
            />
          </StyledRow>
          {routineType ? (
            <StyledRow className="routine-repeat-period">
              <span className="add-title">루틴 반복 주기</span>
              <span>✅</span>
            </StyledRow>
          ) : null}
        </div>
        <div>
          <StyledRow className="time-filter">
            <span className="add-title">시간 필터</span>
            <div className="filter-btn">
              <button type="button">
                <img src={MorningBtnImg} alt="morning" />
                아침
              </button>
              <button type="button">
                <img src={AfternoonBtnImg} alt="morning" />
                오후
              </button>
              <button type="button">
                <img src={NightBtnImg} alt="morning" />
                저녁
              </button>
            </div>
          </StyledRow>
          {routineType ? (
            <StyledRow className="routine-startdate">
              <span className="add-title">루틴 시작일</span>
              <span>✅</span>
            </StyledRow>
          ) : null}
          {todoType ? (
            <StyledRow className="todo-add-first">
              <span className="add-title">첫 번째 순서로 추가하기</span>
              <Checkbox className="checkbox" name="todo-add-first" onChange={(e) => handleCheckbox(e)} />
            </StyledRow>
          ) : null}
        </div>
      </Wrapper>
    </ModalSize>
  );
};

export default AddModal;
