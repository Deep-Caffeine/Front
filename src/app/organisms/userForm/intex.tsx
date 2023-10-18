/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { Provider } from 'jotai'
import Box from "../../atoms/Box";
import Login from "./login";
import Account from './signin/accountInfo/accountInfo';
import { flexColumnCentering } from "@/app/styles/flex";
import Identify from './signin/identity/identify';

export default function UserForm(){
    const [state, setState] = useState<string>("login")
    const handleComponent = () => {
        switch (state) {
            case 'login':
              return <Login handleState={setState}/>;
            case 'signup':
              return <Account/>;
            case 'identify':
              return <Identify/>;
        }
    }
    return(
        <Provider>
            <Box css={wrapperStyle}>
                {handleComponent()}
            </Box>
        </Provider>
    );
}

const wrapperStyle = {
    ...flexColumnCentering,
    width: "100%",
    height: "100vh",
    background: "linear-gradient(180deg, #DADCE8 0%, #ECE0DC 100%)",
}