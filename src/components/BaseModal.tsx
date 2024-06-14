import React from 'react';
import { Modal, ModalProps } from 'antd';

export type DefaultModalProps = ModalProps;

const BaseModal = ({ title, open, onOk, onCancel }: DefaultModalProps) => {
  return (
    <Modal title={title} open={open} onOk={onOk} onCancel={onCancel}>
      BASE MODAL
    </Modal>
  );
};

export default BaseModal;
