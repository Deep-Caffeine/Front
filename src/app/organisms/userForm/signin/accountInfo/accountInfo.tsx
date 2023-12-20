'use client'
/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import Box from "@/app/atoms/Box";
import Label from "@/app/atoms/Label";
import TextInput from "@/app/atoms/Input";
import { poppinsMediumFontStyle, robotoLargeFontStyle, robotoMediumFontStyle, poppinsSmallFontStyle } from '../../../../styles/font';
import useAccount from "./useAccount";
import Button from "@/app/atoms/Button";
import IsStrong from "@/app/libs/isStrong";
import { usePathname, useRouter } from 'next/navigation';
import { useAtom, useSetAtom } from "jotai";
import { newAccountInfo } from "./JAtom";
import { numbersAtom } from './JAtom';

interface AccountProps {
    goToUserInformation: () => void;
  }

export default function Account({ goToUserInformation }: AccountProps){
    const router = useRouter();
    
    const [numbers,setNumbers] = useAtom(numbersAtom);
    const [accountInfo,setAccountInfo] = useAtom(newAccountInfo);
    const [input, setInput] = useState<any>()
    const {
        handleId,
        handlePw,
        checkPw,
        isSame,
        isFormComplete,
    } = useAccount()
   
    const handleClick =  () => {
        if (isFormComplete()) {
            goToUserInformation();
        }
    };
    return(
        <Box css={wrapperStyle}>
            <Label css={titleTextStyle}>회원가입</Label>
            <Label css={discribeTextStyle}>이메일로 회원가입 하기</Label>
            <Box>
                <Box css={inputStyle}>
                    <Label css={inputTitleTextStyle}>아이디(이메일)</Label>
                    <TextInput
                        onChange={(e) => {handleId(e)}}
                        placeholder="이메일을 입력하세요"
                        disabled={false}
                        width={262}
                        height={16}
                        css={textInputStyle}
                    />
                </Box>
                <Box css={inputStyle}>
                    <Label css={inputTitleTextStyle}>비밀번호</Label>
                    <TextInput
                        onChange={(e) => {handlePw(e), setInput(e.target.value)}}
                        placeholder="영문, 숫자, 특수문자 포함 8~20자"
                        disabled={false}
                        width={262}
                        height={16}
                        type="password"
                        css={textInputStyle}
                    />
                    { input ?  <IsStrong input={input}></IsStrong> : null }
                    
                </Box>
                <Box css={inputStyle}>
                    <Label css={inputTitleTextStyle}>비밀번호 확인</Label>
                    <TextInput
                        onChange={(e) => {checkPw(e)}}
                        placeholder="비밀번호를 다시 입력해주세요"
                        disabled={false}
                        width={262}
                        height={16}
                        type="password"
                        css={textInputStyle}
                    />
                    <Label css={ismatchTextStyle(isSame)}>{ isSame === null ? "" : isSame === false ? "비밀번호가 일치하지 않습니다." : "비밀번호가 일치합니다" }</Label>
                </Box>
            </Box>
            <Button
                onClick={handleClick}
                css={isFormComplete() ? enabledBtnStyle : disabledBtnStyle}
                >
                다음
            </Button>
        </Box>
    );
}

const textInputStyle = {
    ...poppinsMediumFontStyle,
    border: "1.5px solid rgba(0, 0, 0, 0.20)",
}

const wrapperStyle = {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    width: "480px",
    height: "500px",
    borderRadius: "15px",
    backgroundColor: "rgba(255, 255, 255, 0.95)"
}

const titleTextStyle = {
    ...robotoLargeFontStyle,
    marginTop: "45px",
    marginBottom: "17px",
    color: "var(--Primary-Color, #1F284F)"
}

const discribeTextStyle = {
    ...robotoMediumFontStyle,
    marginBottom: "20px",
}

const inputTitleTextStyle = {
    ...poppinsSmallFontStyle,
    marginBottom: "7px",
}

const inputStyle = {
    marginBottom: "18px",
    position: "relative" as const,
}

const enabledBtnStyle = {
    width : "123px",
    height : "40px",
    gap : "8px",
    background: "#3700B3", 
    borderRadius : "30px",
    color: "#FFFFFF",
    padding: "6px 12px 6px 12px",
    ...poppinsMediumFontStyle,
    textAlign: "center" as const,
    border: "1px solid #0000001A",

}

const disabledBtnStyle = {
    width : "123px",
    height : "40px",
    gap : "8px",
    background : "#D9D9D9" ,
    borderRadius: "30px", 
    color: "#FFFFFF",
    padding: "6px 12px 6px 12px", 
    ...poppinsMediumFontStyle,
    textAlign: "center" as const,
    border: "1px solid #0000001A",

}

const ismatchTextStyle = (isSame: boolean | null) => ({
    position: "absolute" as const,
    fontFamily: 'Poppins, sans-serif',
    fontSize: '11px',
    fontWeight: "500",
    lineHeight: '17px',
    letterSpacing: '0em',
    textAlign: 'left' as const,
    marginLeft: "3px",
    color: `${isSame ? "blue" : "red"}`,
    marginTop: "3px"
})