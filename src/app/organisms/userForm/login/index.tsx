/** @jsxImportSource @emotion/react */
import Box from "../../../atoms/Box";
import Label from "../../../atoms/Label";
import TextInput from "@/app/atoms/Input";
import Button from "@/app/atoms/Button";
import useLogin from "./useLogin";
import { flexRowCentering, flexColumnCentering } from "@/app/styles/flex";
import {poppinsMediumFontStyle, poppinsLargeFontStyle} from "@/app/styles/font"

interface LoginProps{
    handleState: React.Dispatch<React.SetStateAction<string>>
}

export default function Login({handleState}:LoginProps){
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
                    css={textInputStyle}
                />
                <TextInput
                    onChange={(e) => {handlePw(e)}}
                    placeholder="비밀번호를 입력하세요"
                    disabled={false}
                    width={262}
                    height={16}
                    type="password"
                    css={textInputStyle}
                />
                <Button
                    css={buttonStyle(287, 37)}
                    onClick={()=>{}}
                >로그인</Button>
                <Label
                    css={findTextStyle}
                    onClick={()=>{}}
                >아이디 / 비밀번호 찾기</Label>
                <Label
                    css={SNSLoginStyle}
                >
                    SNS 계정으로 로그인하기
                </Label>
                <Box>
                    <Button
                        css={noneStyleBtn}
                        onClick={() => {}}
                    >
                        <img css={SNSBtnStyle} src="SNSBtn/kakao.png"/>
                    </Button>
                    <Button
                        css={noneStyleBtn}
                        onClick={() => {}}
                    >
                        <img css={SNSBtnStyle} src="SNSBtn/naver.png"/>
                    </Button>
                    <Button
                        css={noneStyleBtn}
                        onClick={() => {}}
                    >
                        <img css={SNSBtnStyle} src="SNSBtn/google.png"/>
                    </Button>
                </Box>
                <Button
                    css={signUpWithEmail}
                    onClick={() => {handleState("signup")}}
                >
                    이메일로 회원가입하기
                </Button>
                <Button
                    css={signUpWithEmail}
                    onClick={() => {handleState("identify")}}
                >
                    본인인증
                </Button>
            </Box>
        </Box>
    );
}

const textInputStyle = {
    ...poppinsMediumFontStyle,
    border: "1.5px solid rgba(0, 0, 0, 0.20)",
}


const wrapperStyle = {
    width: "480px",
    height: "500px",
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
    gap: "10px",
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

const findTextStyle = {
    fontFamily: 'Poppins',
    fontSize: '11px',
    fontWeight: 400,
    lineHeight: 'normal',
    fontStyle: "normal",
    marginBottom: "30px",
}

const SNSLoginStyle = {
    fontFamily: 'Poppins',
    fontSize: '12px',
    fontWeight: 500,
    lineHeight: 'normal',
    fontStyle: "normal",
    marginBottom: "14px"
}

const SNSBtnStyle = {
    width: "32px",
    height: "32px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    marginRight: "19px",
    borderRadius: "50px"
}

const noneStyleBtn = {
    border: "0px solid black",
    background: "none"
}

const signUpWithEmail = {
    display: "flex",
    width: "316px",
    heigth: "40px",
    padding: "9px 12px",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    borderRadius: "30px",
    border: "1.5px solid #3700B3",
    background: "white",
    color: "#3700B3",
    fontFamily: "Poppins",
    fontSize: "13px",
    fontStyle: "normal",
    fontWeight: "800",
    lineHeight: "150%",
}