"use client"
import React from "react";
import UserForm from "./organisms/userForm/intex";
import Verification from "./organisms/identityVerification/verification";
import "./page.css"
import { css, Global } from '@emotion/react';
import Account from "./organisms/userForm/signin/accountInfo/accountInfo";
export default function Home() {
    return (
      <>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&family=Roboto:wght@500&display=swap');
        `}
      />
      
      <Verification></Verification>
      </>
    );
  }
  