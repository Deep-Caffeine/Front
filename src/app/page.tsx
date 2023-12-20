"use client"
import React from "react";
import SchoolForm from "./organisms/SchoolForm/index"
import Verification from "./organisms/identityVerification/verification/verification";
import IdentityVerification from "./organisms/identityVerification";
import UserInformation from "./organisms/identityVerification/userInformation/userInformation";
import "./page.css"
import { css, Global } from '@emotion/react';
import { useState } from "react";
import { Provider } from "jotai";
import Account from "./organisms/userForm/signin/accountInfo/accountInfo";
export default function Home() {
  const [page, setPage] = useState('account');

  const goToUserInformation = () => {
    setPage('userInformation');
  };
  const goToAccount = () => {
    setPage('account');
  };
  

    return (
      <>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&family=Roboto:wght@500&display=swap');
        `}
      />
        {page === 'account' && <Account goToUserInformation={goToUserInformation} />}
        {page === 'userInformation' && <UserInformation goToAccount={goToAccount}/>} 
      </>
      
    );
  }
  