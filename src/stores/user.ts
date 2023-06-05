import { atom } from 'recoil';

export interface IUser {
  id: string;
  pwd: string;
  name: string;
}

export const user = atom<IUser>({
  key: 'user',
  default: {
    id: 'admin',
    pwd: '0000',
    name: '관리자'
  }
});
