/** @jsxImportSource @emotion/react */
import Box from "../../../atoms/Box";
import Label from "../../../atoms/Label";
import TextInput from "@/app/atoms/Input";
import Button from "@/app/atoms/Button";
import useLogin from "./useLogin";
import { flexRowCentering, flexColumnCentering } from "@/app/styles/flex";
import {poppinsMediumFontStyle, poppinsLargeFontStyle} from "@/app/styles/font"

export default function Login(){

    const { handleId, handlePw } = useLogin()

    return(
        <Box css={wrapperStyle}>
            <Box css={headerStyle}>
                <Label css={welcomeTextStyle}>Welcom to</Label>
                <Label css={fofoTextStyle}>Fopo</Label>
            </Box>
            <Box css={inputBoxStyle}>
                <TextInput
                    onChange={(e) => {handleId(e)}}
                    placeholder="아이디를 입력하세요"
                    disabled={false}
                    width={262}
                    height={16}
                    css={poppinsMediumFontStyle}
                />
                <TextInput
                    onChange={(e) => {handlePw(e)}}
                    placeholder="비밀번호를 입력하세요"
                    disabled={false}
                    width={262}
                    height={16}
                    css={poppinsMediumFontStyle}
                />
                <Button
                    css={buttonStyle(287, 37)}
                    onClick={()=>{}}
                >로그인</Button>
            </Box>
        </Box>
    );
}

const wrapperStyle = {
    width: "483px",
    height: "504px",
    borderRadius: "15px",
    backgroundColor: "rgba(255, 255, 255, 0.95)"
}

const headerStyle = {
    marginTop: "52px",
    ...flexRowCentering,
}

const welcomeTextStyle = {
    marginRight: "5px",
    color: "#1F284F",
    ...poppinsLargeFontStyle
}

const fofoTextStyle = {
    color: "#3700B3",
    ...poppinsLargeFontStyle
}

const inputBoxStyle = {
    marginTop: "34px",
    ...flexColumnCentering,
    gap: "10px"
}

const buttonStyle = (width: number, height: number) => ({
    ...flexRowCentering,
    width: `${width}px`,
    height : `${height}px`,
    padding : "12px",
    border : "1px solid #3700B3",
    borderRadius : "26px",
    background: "#3700B3",
    color: "white",
})