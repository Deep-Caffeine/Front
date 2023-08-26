/** @jsxImportSource @emotion/react */
import { Provider } from 'jotai'
import Box from "../../atoms/Box";
import Login from "./login";
import { flexColumnCentering } from "@/app/styles/flex";

export default function UserForm(){
    return(
        <Provider>
            <Box css={wrapperStyle}>
                <Login/>
            </Box>
        </Provider>
    );
}

const wrapperStyle = {
    ...flexColumnCentering,
    width: "100%",
    height: "100vh",
    background: "linear-gradient(180deg, #DADCE8 0%, #ECE0DC 100%)"
}