/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

export interface ButtonProps {
  onClick: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
}

const ButtonStyle = css` // 임시
  width: 26px;
`;

export default function Button({onClick, disabled=false} : ButtonProps){
  return (
    <button css={ButtonStyle} onClick={onClick} disabled={disabled}>
    </button>
  );
};