/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { Provider } from 'jotai'
import Box from "../../atoms/Box";
import UserInformation from './userInformation';
import Verification from './verification';

import { flexColumnCentering } from "@/app/styles/flex";

export default function IdentityVerification(){
    const [state, setState] = useState<string>("profileEdit")
    const handleComponent = () => {
        switch (state) {
            case 'profileEdit':
              return <UserInformation/>;
            case 'auth':
              return <Verification/>;
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