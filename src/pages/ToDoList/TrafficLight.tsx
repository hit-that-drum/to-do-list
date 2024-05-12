import React from 'react';
import styled from 'styled-components';

const TrafficWrapper = styled.div`
  margin-left: 100px;
  display: inline-flex;
  -webkit-box-pack: center;
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
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: deeppink;
  }
`;

const TrafficLight = () => {
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
