/** @jsxImportSource @emotion/react */

import Dropdown from "@/app/atoms/Dropdown"
import TextInput from "@/app/atoms/Input"
import Box from "@/app/atoms/Box"
import Button from "@/app/atoms/Button"
import Label from "@/app/atoms/Label"
import { flexRowCentering, flexColumnCentering } from "@/app/styles/flex";
import { useState } from "react"
import {poppinsMediumFontStyle, poppinsLargeFontStyle,robotoMediumCenterFontStyle,poppinsSmallFontStyle} from "@/app/styles/font"
import useVerification from "./useVerification"
import { useAtom } from 'jotai';
import { selectedTelecomAtom, phoneNumberAtom, authCodeAtom } from './JAtoms';
import { useRouter } from 'next/navigation';

export default function verification(){
    const router = useRouter();

    const telecomOptions = [
        { value: 'skt', label: 'SKT' },
        { value: 'lg', label: 'LG U+' },
        { value: 'kt', label: 'KT' }
    ];
    const {selectedTelecom,
        phoneNumber,
        authCode,
        handleChange,
        handlePhoneChange,
        handleAuthChange} 
      = useVerification();
    return(
        <Box css={wrapperStyle}>
            <Box>
                <Label css={headerStyle}>본인인증</Label>
            </Box>
            <Box css={textStyle}>
                <Label>가입을 위해 본인의<br />휴대폰 번호를 인증해 주세요.</Label>
            </Box>
            
            <Box>
                <Label css={poppinsSmallFontStyle}>통신사</Label>
                <Dropdown css={dropdownStyle}
                onChange={handleChange}
                value={selectedTelecom}
                options={telecomOptions}
                placeholder="통신사"
                />   
                <TextInput css={phoneNumberInputStyle}
                onChange={handlePhoneChange}
                value={phoneNumber}
                placeholder="휴대폰 번호 11자리"
                width={174} 
                height={46}                 
                />
                <Button css={phoneNumberBtn}
                    onClick={() => {}}
                    disabled={phoneNumber.length !== 11}>
                    전송
                </Button>
            </Box>
            <Box>
                <Label css={poppinsSmallFontStyle}>인증번호</Label>
                <Box  css={authCodeWrapperStyle}>
                    <TextInput css={authCodeStyle}
                    onChange={handleAuthChange}
                    value={authCode}
                    placeholder="인증번호 6자리를 입력해주세요"
                    width={314}
                    height={46}
                    />
                    
                </Box>
            </Box>
            <Box css={btnWrapperStyle}>
            <Label>
                뒤로 가기     
            </Label>
                <div style={spacerStyle} />
                <Button
                onClick={() => router.push('/UserInformationPage')} // 임시로 해놓은거
                css={(phoneNumber.length === 11 && authCode.length === 6) ?         enabledBtnStyle : disabledBtnStyle}
                        disabled={authCode.length !== 6 || phoneNumber.length !== 11}>
                        다음
                    </Button>
            </Box>
            
        </Box>
    )
}

const wrapperStyle = {
    width: "480px",
    height: "500px",
    borderRadius: "15px",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    ...flexColumnCentering,
}

const headerStyle = {
    marginTop : "38px",
    ...poppinsLargeFontStyle
}
const textStyle = {
    marginTop: "20px",
    marginBottom : "38px",
    ...flexRowCentering,
    ...robotoMediumCenterFontStyle,
}
const phoneBoxStyle = {
    marginBottom : "10px",
    marginLeft : "83px",
    marginRight : "83px",
    ...flexRowCentering
}
const dropdownStyle = {
    
    width : "68px",
    height : "46px",
    borderRadius : "8px",
    border: "1px solid #0000001A",
    marginTop : "10px",
    marginBottom :"10px",
    ...poppinsMediumFontStyle
}


const phoneNumberInputStyle = {
    width : "174px",
    height : "46px",
    marginLeft :"6px",
    marginRight : "6px",
    padding : "0px",
    paddingLeft : "6px",
    border: "1px solid #0000001A",
    ...poppinsMediumFontStyle,
}
const phoneNumberBtn = {
    width : "59px",
    height : "46px",
    borderRadius : "10px",
    border: "1px solid #0000001A",
}
const authCodeWrapperStyle = {
    width : "314px",
    ...flexColumnCentering
}
const authCodeStyle = {
    width: "314px",
    height : "46px",
    marginTop:  "10px",
    padding : "0px",
    paddingLeft : "6px",

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
    border: "1px solid #0000001A",

    textAlign: "center" as const,
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
    border: "1px solid #0000001A",

    textAlign: "center" as const,
}
const flexColumn = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
 };
 
 const btnWrapperStyle = {
    marginTop : "79px",
    marginBottom:  "30px",
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center', 
    ...robotoMediumCenterFontStyle
}
const spacerStyle = {
    width: '229px',
}