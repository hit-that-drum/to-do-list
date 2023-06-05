import React, { ChangeEvent, useCallback } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { inputState, ITodoTypes, todosState } from '../stores/todo';

const TodoInput = (): JSX.Element => {
  const [contents, setContents] = useRecoilState<string>(inputState);

  const todos = useRecoilValue<ITodoTypes[]>(todosState);
  const setTodos = useSetRecoilState<ITodoTypes[]>(todosState);

  const addTodo = useCallback((): void => {
    if (!contents.trim()) {
      return;
    }

    const nextId: number = todos.length > 0 ? todos[todos.length - 1].id + 1 : 0;

    const todo: ITodoTypes = {
      id: nextId,
      contents,
      isCompleted: false
    };

    setTodos([...todos, todo]);

    setContents('');
  }, [contents, setContents, setTodos, todos]);

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      const { value } = e.target;
      setContents(value);
    },
    [setContents]
  );

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>): void => {
      if (e.key === 'Enter') {
        addTodo();
      }
    },
    [addTodo]
  );

  return (
    <div>
      <input type="text" placeholder="Todo를 입력해보세요!" value={contents} onChange={onChange} onKeyDown={onKeyDown} />
      <button type="button" onClick={addTodo}>
        ADD
      </button>
    </div>
  );
};

export default TodoInput;
