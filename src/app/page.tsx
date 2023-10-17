"use client"
import React from "react";
import UserForm from "./organisms/userForm";
import Verification from "./organisms/identityVerification/verification";
import IdentityVerification from "./organisms/identityVerification";
import UserInformation from "./organisms/identityVerification/userInformation";
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
      
      <IdentityVerification></IdentityVerification>
      </>
    );
  }
  