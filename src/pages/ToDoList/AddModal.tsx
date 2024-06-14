/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Modal, ModalProps } from 'antd';
// import BaseModal from '../../components/BaseModal';

const ModalSize = styled.div`
  width: 100%;
  height: 100vh;
`;

const Wrapper = styled(Modal)`
  position: absolute;
  left: 33%;
  border: 1px solid rgb(204, 204, 204);
  background: rgb(255, 255, 255);
  overflow: hidden auto;
  border-radius: 20px;
  outline: none;
  padding: 0px;
  box-shadow: rgba(24, 71, 23, 0.4) 0px 5px 25px;
  width: 510px;
  height: 678px;
  max-width: 510px;
  max-height: 100%;
`;

export type DefaultModalProps = ModalProps;

const AddModal = ({ title, open, onOk, onCancel }: DefaultModalProps) => {
  const [titleType, setTitleType] = useState<string | undefined>('');
  const routineType = titleType === '루틴';
  const todoType = titleType === '투두';

  useEffect(() => {
    console.log('title', title?.toString().split(' ')[0]);
    setTitleType(title?.toString().split(' ')[0]);
  }, [title]);

  return (
    <ModalSize>
      <Wrapper title={title} open={open} onOk={onOk} onCancel={onCancel}>
        <input type="text" />
        <div>
          <span>{titleType} 수행이모지</span>
          <span>✅</span>
        </div>
        {todoType ? (
          <div>
            <span>날짜</span>
            <span>✅</span>
          </div>
        ) : null}
        <div>
          <span>{titleType} 알람</span>
          <span>✅</span>
        </div>
        <div>
          <span>언제 할래요?</span>
          <span>✅</span>
        </div>
        {routineType ? (
          <div>
            <span>루틴 반복 주기</span>
            <span>✅</span>
          </div>
        ) : null}
        <div>
          <span>시간 필터</span>
          <span>✅</span>
        </div>
        {routineType ? (
          <div>
            <span>루틴 시작일</span>
            <span>✅</span>
          </div>
        ) : null}
        {todoType ? (
          <div>
            <span>첫 번째 순서로 추가하기</span>
            <span>✅</span>
          </div>
        ) : null}
      </Wrapper>
    </ModalSize>
  );
};

export default AddModal;
