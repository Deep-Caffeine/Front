/** @jsxImportSource @emotion/react */
import React from 'react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

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

const modalBackgroundStyle = {
  position: "fixed" as const,
  top: "0",
  left: "0",
  rigth: "0",
  backgroundColor : "rgba(0, 0, 0, 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: "999"
}


const modalContentStyle = {
  backgroundColor: "#ffffff",
  width: "80%",
  maxWidth: "400px",
  padding: "20px",
  borderRadius: "4px"
}