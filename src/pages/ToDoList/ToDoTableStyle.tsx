import styled from 'styled-components';

export const ToDoSection = styled.div`
  display: flex;
  button {
    all: unset;
    cursor: pointer;
  }
  .numbering {
    display: flex;
    padding: 1px;
    width: 18px;
    border-radius: 5px 0px 0px 5px;
    border-width: 0px;
    justify-content: center;
    align-items: center;
    background-color: rgb(72, 120, 97);
    color: #ffffff;
    margin-left: 12px;
    height: 38px;
  }
  .routine-todo-wrapper {
    display: flex;
    flex-direction: column;
  }
  /* div:nth-child(3) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgb(255, 255, 255);
  } */
  /* div:nth-child(4) {
    border: 1px solid salmon;
  } */
`;

export const TimeDetailMyDay = styled.div<{ routinesTodosIdx?: number; routinesTodosLen: number; routinesTodosStatus: boolean }>`
  background-color: #ffffff;
  display: flex;
  width: 390px;
  height: 40px;
  border-radius: 5px;
  font-size: 13px;
  .timedetail {
    padding: 4px 8px;
    width: 130px;
    border: 1px solid rgb(220, 224, 228);
    border-radius: ${({ routinesTodosIdx, routinesTodosLen }) => {
      if (routinesTodosIdx === 0) return `0 5px 0 0`;
      if (routinesTodosIdx === routinesTodosLen) return '0 0 5px 0';
      return '0';
    }};
  }
  .myday {
    display: flex;
    align-items: center;
    padding: 4px 8px;
    width: 260px;
    border-radius: ${({ routinesTodosIdx, routinesTodosLen }) => {
      if (routinesTodosIdx === 0) return `5px 5px 0 0`;
      if (routinesTodosIdx === routinesTodosLen) return '0 0 5px 5px';
      return '0';
    }};
    border-top: ${({ routinesTodosIdx }) => {
      if (routinesTodosIdx === 0) return '3px solid rgb(38, 222, 129)';
      return '1px solid rgb(220, 224, 228)';
    }};
    border-bottom: ${({ routinesTodosIdx, routinesTodosLen }) => {
      if (routinesTodosIdx === routinesTodosLen) return '3px solid rgb(38, 222, 129)';
      return '1px solid rgb(220, 224, 228)';
    }};
    border-left: 3px solid rgb(38, 222, 129);
    border-right: 3px solid rgb(38, 222, 129);
    img {
      width: 20px;
      height: 20px;
    }
    p {
      margin-left: 3px;
      color: ${({ routinesTodosStatus }) => (routinesTodosStatus ? 'rgb(178, 182, 187)' : null)};
      text-decoration: ${({ routinesTodosStatus }) => (routinesTodosStatus ? 'line-through' : null)};
    }
  }
`;

export const YoilWrapper = styled.div<{
  nowWeekNumMatched?: boolean;
  routinesTodosIdx: number;
  routinesTodosLen: number;
}>`
  .yoil {
    display: flex;
    margin: 0px 2px;
    flex-direction: column;
    /* padding: 5px 0px; */
    height: 38px;
    width: 38px;
    align-items: center;
    justify-content: center;
    border-width: 0.5px 1px 1px;
    border-style: solid;
    border-image: initial;
    background-color: ${({ nowWeekNumMatched }) => (nowWeekNumMatched ? 'rgb(255, 255, 255)' : 'rgb(245, 245, 245)')};
    /* border-color: rgb(38, 222, 129) rgb(38, 222, 129) rgb(237, 239, 240); */
    border-color: rgb(237, 239, 240);
    border-radius: ${({ routinesTodosIdx, routinesTodosLen }) => {
      if (routinesTodosIdx === 0) return `5px 5px 0 0`;
      if (routinesTodosIdx === routinesTodosLen) return '0 0 5px 5px';
      return '0';
    }};
    border-collapse: collapse;
  }
`;

export const BottomSection = styled.div`
  margin: 18px 0 30px;
  width: 775px;
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
  }
  button {
    all: unset;
    cursor: pointer;
    display: flex;
    padding: 4px 8px;
    width: 118.5px;
    height: 26px;
    border: 1px solid rgb(7, 116, 61);
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    padding: 8px;
    border-width: 1px;
    font-weight: bold;
    font-size: 13px;
  }
  .add-routine {
    color: #ffffff;
    background: rgb(7, 116, 61);
    margin-left: 12px;
  }
  .add-todo {
    color: rgb(7, 116, 61);
    margin-left: 5px;
    img {
      width: 14px;
      height: 14px;
    }
  }
`;
