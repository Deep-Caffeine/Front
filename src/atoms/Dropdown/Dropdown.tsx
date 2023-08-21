import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export interface DropdownProps {
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    value: string;
    options: {value: string, label: string}[];
    placeholder?: string;
    disabled?: boolean;
}

const StyledDropdown = styled.select`
  width: 26px;
`;

export default function Dropdown({ onChange, value, options, placeholder = '', disabled = false }: DropdownProps) {
    return(
        <StyledDropdown
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
        </StyledDropdown>
    );
}