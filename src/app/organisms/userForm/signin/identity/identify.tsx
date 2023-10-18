/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import Box from "@/app/atoms/Box";
import Label from "@/app/atoms/Label";
import TextInput from "@/app/atoms/Input";
import useIdentify from "./useIdentify"
import { poppinsMediumFontStyle, robotoLargeFontStyle, robotoMediumFontStyle, poppinsSmallFontStyle } from '../../../../styles/font';
import Button from "@/app/atoms/Button";
import IsStrong from "@/app/libs/isStrong";

export default function Identify(){
    const {
        handlePhone,
        handleCertification,
    } = useIdentify()
    
    return(
        <Box css={wrapperStyle}>
            <Label css={titleTextStyle}>본인인증</Label>
            <Label css={discribeTextStyle}>가입을 위해 본인의 휴대폰 번호를 인증해 주세요.</Label>
            <Box>
                <Box css={inputStyle}>
                    <Label css={inputTitleTextStyle}>통신사</Label>
                    <TextInput 
                        onChange={(e) => {handlePhone(e)}}
                        placeholder=""
                        disabled={false}
                        width={68}
                        height={46}
                        css={textInputStyle}
                    />
                    <TextInput
                        onChange={(e) => {handlePhone(e)}}
                        placeholder="휴대폰 번호 11자리"
                        disabled={false}
                        width={174}
                        height={46}
                        css={textInputStyle}
                    />
                    <Button
                        onClick={() => {}}
                        css={submitButtonStyle}
                    >
                        전송
                    </Button>
                </Box>
                <Box css={inputStyle}>
                    <Label css={inputTitleTextStyle}>인증번호</Label>
                    <TextInput
                        onChange={(e) => {handleCertification(e)}}
                        placeholder="인증번호 6자리를 입력해주세요"
                        disabled={false}
                        width={314}
                        height={46}
                        max={6}
                        css={textInputStyle}
                    />                    
                </Box>

            </Box>
            <Label
            onClick={() => {}}
            css={returnStyle}>
                뒤로가기
            </Label>
            <Button
                onClick={() => {}}
                css={passButtonStyle}
            >
                건너뛰기
            </Button>
        </Box>
    );
}

const textInputStyle = {
    ...poppinsMediumFontStyle,
    border: "1.5px solid rgba(0, 0, 0, 0.20)",
    marginRight: "6px",
}

const wrapperStyle = {
    display: "flex",
    flexDirection: "column" as const,
    position: "relative" as const,
    alignItems: "center",
    width: "480px",
    height: "560px",
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
    fontSize: "12px",
}

const inputStyle = {
    marginBottom: "18px",
    position: "relative" as const,
}

const submitButtonStyle = {
    display: "inline",
    width: "59px",
    height: "46px",
    padding: "6px 12px",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    flexShrink: "0",
    border: "1px solid rgba(0, 0, 0, 0.20)",
    borderRadius: "10px",
    background: "#FFFFFF",
    color: "#515458"
}

const returnStyle = {
    ...robotoMediumFontStyle,
    fontWeight: "400",
    fontSize:"12px",
    lineHeight:"14px",
    position:"absolute",
    bottom:"43px",
    left:"50px",
    width:"48px",
    height: "14px",
    color:"#515458",
}

const passButtonStyle = {
    position: "absolute" as const,
    bottom: "30px",
    right: "30px",
    marginTop: "15px",
    width: "123px",
    height: "40px",
    padding: "6px 12px",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    flexShrink: "0",
    borderRadius: "30px",
    background: "#3700B3",
    color: "#FFFFFF",
    border: "1px solid #DBDBDB",
}
