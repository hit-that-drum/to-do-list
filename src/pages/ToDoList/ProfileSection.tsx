import React from 'react';
import styled from 'styled-components';
import ProfileEgg from '../../assets/profile-egg.svg';

const ProfileWrapper = styled.div`
  width: 730px;
  height: 100px;
  display: flex;
  .first-letter {
    background-color: rgb(253, 167, 223);
    border-radius: 50%;
    width: 100px;
    height: 100px;
    position: relative;
    margin-right: 8px;
    span {
      position: absolute;
      color: #ffffff;
      font-size: 42px;
      top: 27%;
      left: 30%;
    }
  }
  .profile-name {
    display: flex;
    .name {
      margin-left: 3px;
      line-height: 22px;
      text-align: left;
      font-size: 14px;
      color: rgb(71, 91, 74);
    }
    .badge {
      display: flex;
      margin: 0px 4px;
      border-radius: 12px;
      border: 1px solid rgb(204, 204, 204);
      padding: 4px 6px;
      background: rgb(255, 255, 255);
    }
  }
`;

const ProfileTable = styled.div`
  display: flex;
  align-items: center;
  .profile-table {
    background: rgb(251, 251, 251);
    border: 1px solid rgb(203, 219, 206);
    border-radius: 10px;
    max-width: 392px;
    min-width: 275px;
    margin-top: 6px;
  }
  .from-the-start {
    display: flex;
    flex-direction: flex-start;
    flex: 1 1 0%;
    padding: 5px 12px;
    font-weight: 500;
    font-size: 12px;
    color: rgb(129, 129, 129);
    padding: 5px 12px;
    .day {
      color: rgb(38, 222, 129);
    }
  }
  .introduce {
    font-size: 13px;
    color: rgb(129, 129, 129);
    text-align: left;
    white-space: pre-line;
    word-break: break-word;
    padding: 5px;
    border-top: 1px solid rgba(204, 204, 204, 0.5);
    span:nth-child(1) {
      width: 10px;
      height: 12px;
      align-self: flex-start;
      margin: 5px;
    }
  }
`;

const FeedbackBtn = styled.button`
  align-self: flex-start;
  background-color: rgb(24, 205, 114);
  border-radius: 8px;
  margin-left: 24px;
  margin-top: 6px;
  width: 150px;
  height: 32px;
  color: #ffffff;
  border: none;
`;

const ProfileSection = () => {
  return (
    <ProfileWrapper>
      <div className="first-letter">
        <span>밍</span>
      </div>
      <div>
        <div className="profile-name">
          <span className="name">밍밍</span>
          <span className="badge">🏅</span>
        </div>
        <ProfileTable>
          <div className="profile-table">
            <div className="from-the-start">
              <span>루틴 시작한 지</span>
              <span className="day">132</span>
              <span>일</span>
            </div>
            <div className="introduce">
              <span>
                <img src={ProfileEgg} alt="profile-egg" />
              </span>
              <span>nothing good ever lost🍒</span>
            </div>
          </div>
          <FeedbackBtn type="button">피드백 보내기</FeedbackBtn>
        </ProfileTable>
      </div>
    </ProfileWrapper>
  );
};

export default ProfileSection;
