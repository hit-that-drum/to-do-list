import React, { useCallback, useState } from 'react';
import { SetterOrUpdater } from 'recoil';
import styled from 'styled-components';
import { ITodoTypes } from '../stores/todo';
import TodoModal from './TodoModal';

interface PropTypes {
  id: number;
  contents: string;
  isCompleted: boolean;

  onComplete: (id: number) => void;
  onDelete: (id: number) => void;

  todos: ITodoTypes[];
  setTodos: SetterOrUpdater<ITodoTypes[]>;
}

const TodoItemWrapper = styled.div`
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding-bottom: 6px;
  border-bottom: 1px solid var(--white);
  font-size: 1.2rem;

  -moz-user-select: none;
  -webkit-user-drag: none;

  &-Completed {
    text-decoration-line: line-through;
    text-decoration-color: var(--red);
  }
`;

const TodoItem = ({ id, contents, isCompleted, onComplete, onDelete, todos, setTodos }: PropTypes): JSX.Element => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [modifyContents, setModifyContents] = useState<string>('');

  const onModify = useCallback((): void => {
    setIsModal(true);
    setModifyContents(contents);
  }, [contents]);

  const onModifyTodo = useCallback((): void => {
    if (!modifyContents.trim()) {
      return;
    }

    setTodos(
      todos.map((todo: ITodoTypes) => {
        return todo.id === id ? { ...todo, contents: modifyContents } : todo;
      })
    );

    setIsModal(false);
  }, [id, modifyContents, setTodos, todos]);

  return (
    <div>
      <TodoItemWrapper
        role="presentation"
        title={contents}
        className={isCompleted ? 'TodoItem-Completed' : ''}
        onClick={() => onComplete(id)}
      >
        {contents}
      </TodoItemWrapper>
      <div>
        <button type="button" onClick={onModify}>
          MODIFY
        </button>
        <button type="button" onClick={() => onDelete(id)}>
          DELETE
        </button>
      </div>
      {isModal && (
        <TodoModal
          setIsModal={setIsModal}
          modifyContents={modifyContents}
          setModifyContents={setModifyContents}
          onModifyTodo={onModifyTodo}
        />
      )}
    </div>
  );
};

export default TodoItem;
