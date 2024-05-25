/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { MockDataType } from '@interfaces/todo.interface';

const TrafficWrapper = styled.div`
  margin-left: 100px;
  display: inline-flex;
  justify-content: center;
  background: rgb(88, 94, 86);
  border: 1px solid rgb(119, 119, 119);
  border-radius: 15px;
  padding: 3px 0px;
  box-shadow: rgba(24, 71, 23, 0.15) 0px 3px 10px;
  overflow: hidden;
  .light-box {
    padding: 4px 6px;
    border-width: 1px;
    border-style: solid;
    border-color: transparent rgb(119, 119, 119) transparent transparent;
    border-image: initial;
  }
  .light-circle {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: deeppink;
  }
`;

const TrafficLight = ({ data }: { data: MockDataType[] }) => {
  const aaa = data.map((el) => el.routines);
  // console.log('aaa', aaa);
  return (
    <TrafficWrapper>
      <div className="light-box">
        <div className="light-circle" />
      </div>
      <div className="light-box">
        <div className="light-circle" />
      </div>
      <div className="light-box">
        <div className="light-circle" />
      </div>
      <div className="light-box">
        <div className="light-circle" />
      </div>
      <div className="light-box">
        <div className="light-circle" />
      </div>
      <div className="light-box">
        <div className="light-circle" />
      </div>
      <div className="light-box">
        <div className="light-circle" />
      </div>
    </TrafficWrapper>
  );
};

export default TrafficLight;
