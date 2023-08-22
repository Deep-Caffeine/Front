/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const modalBackgroundStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const modalContentStyle = css`
  background-color: #ffffff;
  width: 80%;
  max-width: 400px;
  padding: 20px;
  border-radius: 4px;
`;

export default function Modal({ open, onClose, children }: ModalProps) {
  if (!open) {
    return null;
  }

  return(
    <div css={modalBackgroundStyle} onClick={onClose}>
      <div css={modalContentStyle} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}