/** @jsxImportSource @emotion/react */
import Box from "../../../atoms/Box";
import Label from "../../../atoms/Label";
import TextInput from "@/app/atoms/Input";
import useLogin from "./useLogin";
import { flexRowCentering, flexColumnCentering } from "@/app/styles/flex";

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
                    width={212}
                    height={8}
                />
                <TextInput
                    onChange={(e) => {handlePw(e)}}
                    placeholder="비밀번호를 입력하세요"
                    disabled={false}
                    width={212}
                    height={8}
                />
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
    fontFamily: "Poppins",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "36px",
}

const fofoTextStyle = {
    color: "#3700B3",
    fontFamily: "Poppins",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "36px",
}

const inputBoxStyle = {
    marginTop: "34px",
    ...flexColumnCentering,
    gap: "10px"
}

const inputStyle = {
    padding : "12px",
}