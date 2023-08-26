"use client"
import React from "react";
import UserForm from "./organisms/userForm/intex";
import "./page.css"
import { css, Global } from '@emotion/react';

export default function Home() {
    return (
      <>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&family=Roboto:wght@500&display=swap');
        `}
      />
      <UserForm></UserForm>
      </>
    );
  }
  