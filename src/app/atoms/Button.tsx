/** @jsxImportSource @emotion/react */
import React from 'react';
import { BaseTypes } from '../tpyes/common';
import { css } from '@emotion/react';

export interface ButtonProps extends BaseTypes{
  onClick: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
}

export default function Button({onClick, disabled=false, children, ...props} : ButtonProps){
  return (
    <button {...props as any}  onClick={onClick} disabled={disabled}>
        {children}
    </button>
  );
};