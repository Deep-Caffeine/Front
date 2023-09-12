/** @jsxImportSource @emotion/react */
import React from 'react';
import { css,CSSObject } from '@emotion/react';

export interface DropdownProps {
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    value: string;
    options: {value: string, label: string}[];
    placeholder?: string;
    disabled?: boolean;
    children?: React.ReactNode;
}



export default function Dropdown({ onChange, value, options, placeholder = '', disabled = false }: DropdownProps) {
    return(
        <select
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