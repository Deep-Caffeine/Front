// atoms/Button/LoginButton.tsx
import React from 'react';
import { css } from '@emotion/react';

export interface InputProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value:string;
    placeholder?:string;
    disabled?:boolean;
}

const InputStyle = css` //임시
  width: 26px;
`;


export default function TextInput({ onChange, value, placeholder = '', disabled = false }: InputProps) {
    return(
        <input
            css={InputStyle}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            disabled={disabled}
            type="text"
        />     
    )
}