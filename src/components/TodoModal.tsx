import React, { ChangeEvent, Dispatch, SetStateAction, useCallback } from 'react';

interface PropTypes {
  setIsModal: Dispatch<SetStateAction<boolean>>;
  modifyContents: string;
  setModifyContents: Dispatch<SetStateAction<string>>;
  onModifyTodo: () => void;
}

const TodoModal = ({ setIsModal, modifyContents, setModifyContents, onModifyTodo }: PropTypes): JSX.Element => {
  const onCloseModal = useCallback((): void => {
    setIsModal(false);
  }, [setIsModal]);
  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      const { value } = e.target;
      setModifyContents(value);
    },
    [setModifyContents]
  );

  return (
    <div>
      <div role="presentation" onClick={onCloseModal} />
      <div>Todo 수정하기</div>
      <input type="text" value={modifyContents} onChange={onChange} placeholder="Todo 입력" />
      <button type="button" onClick={onModifyTodo}>
        수정하기
      </button>
    </div>
  );
};

export default TodoModal;
