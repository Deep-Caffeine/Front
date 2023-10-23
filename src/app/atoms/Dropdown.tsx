/** @jsxImportSource @emotion/react */
import React from 'react';
import { css,CSSObject } from '@emotion/react';
import { BaseTypes } from "@/app/tpyes/common";
export interface DropdownProps extends BaseTypes {
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    value: string;
    options: {value: string, label: string}[];
    placeholder?: string;
    disabled?: boolean;
    children?: React.ReactNode;
}



export default function Dropdown({ onChange, value, options, placeholder = '', disabled = false, ...props}: DropdownProps) {
    return(
        <select
            {...props}
             onChange={onChange}
             value={value}
             disabled={disabled}
         >
        <option value="" disabled>
        {placeholder}
        </option>
        {options.map(option => (
        <option key={option.value} value={option.value}>
        {option.label}
        </option>
        ))}
        </select>
    )
    }