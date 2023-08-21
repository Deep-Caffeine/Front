import React from 'react';
import styled from '@emotion/styled';

export interface ButtonProps {
  onClick: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
}

const StyledButton = styled.button`
  width: 26px;
`;

export default function Button({ onClick, children, disabled = false }: ButtonProps) {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};