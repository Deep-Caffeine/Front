/** @jsxImportSource @emotion/react */

import Dropdown from "@/app/atoms/Dropdown"
import TextInput from "@/app/atoms/Input"
import Box from "@/app/atoms/Box"
import Button from "@/app/atoms/Button"
import Label from "@/app/atoms/Label"
import { flexRowCentering, flexColumnCentering } from "@/app/styles/flex";
import { useState } from "react"
import {poppinsMediumFontStyle, poppinsLargeFontStyle,robotoMediumCenterFontStyle,poppinsSmallFontStyle} from "@/app/styles/font"


export default function verification(){
    const [selectedTelecom, setSelectedTelecom] = useState('');

    const telecomOptions = [
        { value: 'skt', label: 'SKT' },
        { value: 'lg', label: 'LG U+' },
        { value: 'kt', label: 'KT' }
    ];
    
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedTelecom(event.target.value);
    };

    const [phoneNumber, setPhoneNumber] = useState("")
    const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        // 숫자만 입력 가능하도록 처리
        if (!value || /^[0-9\b]+$/.test(value)) {
            // 11자리 제한 추가
            if (value.length <= 11) {
                setPhoneNumber(value);
            }
        }
    };

    const [authCode, setAuthCode] = useState("")
    const handleAuthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        // 숫자만 입력 가능하도록 처리
        if (!value || /^[0-9\b]+$/.test(value)) {
            // 6자리 제한 추가
            if (value.length <= 6) {
                setAuthCode(value);
            }
        }
    };
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
                <Dropdown
                onChange={handleChange}
                value={selectedTelecom}
                options={telecomOptions}
                placeholder="통신사를 선택하세요"
                />   
                <TextInput css={phoneNumberInputStyle}
                onChange={handlePhoneChange}
                value={phoneNumber}
                placeholder="휴대폰 번호 11자리"
                width={189} 
                height={46}                 
                />
            </Box>
            <Box>
                <Label css={poppinsSmallFontStyle}>인증번호</Label>
                <Box  css={authCodeWrapperStyle}>
                    <TextInput css={authCodeStyle}
                    onChange={handleAuthChange}
                    value={authCode}
                    placeholder="인증번호 6자리를 입력해주세요"
                    width={316}
                    height={46}
                    />
                    <Button css={(phoneNumber.length === 11 && authCode.length === 6) ?         enabledBtnStyle : disabledBtnStyle}
                        onClick={() => {}}
                        disabled={authCode.length !== 6 || phoneNumber.length !== 11}>
                        다음
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

const wrapperStyle = {
    width: "480px",
    height: "500px",
    borderRadius: "15px",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    margin : "auto",
    ...flexColumnCentering,
}

const headerStyle = {
    ...poppinsLargeFontStyle
}
const textStyle = {
    marginTop: "20px",
    marginBottom : "20px",
    ...flexRowCentering,
    ...robotoMediumCenterFontStyle,
}
const dropdownStyle = {
    width : "300px",
    height : "300px",
    borderRadius : "8px",
    ...poppinsMediumFontStyle
}

const phoneNumberInputStyle = {
    gap : "8px",
    marginLeft :"20px",
    ...poppinsMediumFontStyle,
}
const authCodeWrapperStyle = {
    ...flexColumnCentering
}
const authCodeStyle = {
    marginTop:  "10px",
    marginBottom : "80px",
    padding: "6px 12px 6px 12px",

}
const enabledBtnStyle = {
    width : "341px",
    height : "40px",
    gap : "8px",
    background: "#3700B3", 
    borderRadius : "30px",
    color: "#FFFFFF",
    padding: "6px 12px 6px 12px",
    ...poppinsMediumFontStyle,
    textAlign: "center" as const,
}

const disabledBtnStyle = {
    width : "341px",
    height : "40px",
    gap : "8px",
    background: "#DBDBDB", 
    borderRadius: "30px", 
    color: "#575757",
    padding: "6px 12px 6px 12px", 
    ...poppinsMediumFontStyle,
    textAlign: "center" as const,
}