import React from 'react';
import { css} from '@emotion/react';
import styled from '@emotion/styled'

export interface InputProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    placeholder?: string;
    disabled?: boolean;
}

const StyledInput = styled.input`
  width: 26px;
`;

export default function TextInput({ onChange, value, placeholder = '', disabled = false }: InputProps) {
    return (
        <StyledInput
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            disabled={disabled}
            type="text"
        />
    );
}