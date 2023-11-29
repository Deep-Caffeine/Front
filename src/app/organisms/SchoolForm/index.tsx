/** @jsxImportSource @emotion/react */
import React from 'react';
import { Provider } from 'jotai'
import Box from "../../atoms/Box";
import SchoolForm from './SchoolInfo/school'; // Assuming you have a SchoolForm component.
import { flexColumnCentering } from "@/app/styles/flex";

export default function UserForm(){
    return(
        <Provider>
            <Box css={wrapperStyle}>
                <SchoolForm/>
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
