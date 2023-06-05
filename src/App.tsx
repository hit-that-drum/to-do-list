import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { MyComponent } from '@api/index';
import { useRecoilState } from 'recoil';
import { IUser, user } from './stores/user';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import logo from './logo.svg';
import './App.css';
import { Button } from './stories/Button';
import TodoTitle from './components/TodoTitle';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

interface IUserListDataDepthThree {
  firstName?: string;
  id?: string;
  lastName?: string;
  picture?: string;
  title?: string;
}

interface IUserListDataDepthTwo {
  data?: IUserListDataDepthThree[];
}

interface IUserList {
  data?: IUserListDataDepthTwo;
  total?: number;
  page?: number;
  limit?: number;
}

const hy = '6424f118ec24116cc342cef7';

const API_HOST = process.env.REACT_APP_API_HOST;

const getUser = async (apiKey: string) => {
  try {
    const response = await axios({
      method: 'get',
      url: `${API_HOST || ''}/user`,
      headers: {
        'app-id': apiKey
      }
    });
    return response;
  } catch (error) {
    throw new Error();
  }
};

const StyledButton = styled.button`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 2rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  color: gray;
  background: white;
  cursor: pointer;
  font-weight: 800;
`;

const TodoWrapper = styled.div`
  background-color: #e7fdd8;
  padding: 100px;
`;

const App = () => {
  const { data } = useQuery<IUserList>(['getUser', hy], () => getUser(hy));
  const userData = data?.data?.data;
  console.log('userData', userData);

  const [loginUser, setLoginUser] = useRecoilState<IUser>(user);

  const handleChangeUser = () => {
    setLoginUser({
      id: 'CHANGED',
      pwd: '1234',
      name: '바뀜'
    });
  };

  return (
    <div className="App">
      <div>
        <div>User Name: {loginUser.name}</div>
        <div>User Id: {loginUser.id}</div>
        <div>User Pwd: {loginUser.pwd}</div>
      </div>
      <TodoWrapper>
        <TodoTitle />
        <TodoList />
        <TodoInput />
      </TodoWrapper>
      <header className="App-header">
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <StyledButton onClick={handleChangeUser}>REACT</StyledButton>
        <MyComponent />
        <Button label="PRIMARY" primary size="medium" />
        <Button label="SECONDARY" size="medium" />
        {userData?.map((el) => {
          return (
            <div key={el.id}>
              Name: {el.lastName}
              Id: {el.id}
            </div>
          );
        })}
        <p>{}</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
