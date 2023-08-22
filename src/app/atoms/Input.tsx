/** @jsxImportSource @emotion/react */
import React from 'react';
import { BaseTypes } from '../tpyes/common';


export interface InputProps extends BaseTypes{
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?:string;
    placeholder?:string;
    disabled?:boolean;
    width: number;
    height: number;
}

export default function TextInput({ onChange, value, placeholder, disabled, width, height }: InputProps) {
    return(
        <input
            css={InputStyle(width, height)}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            disabled={disabled}
            type="text"
        />     
    )
}

const InputStyle = (width:number, height:number) => ({
    width: `${width}px`,
    height: `${height}px`,
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid rgba(0, 0, 0, 0.10)",
    fontSize: "10px"
})