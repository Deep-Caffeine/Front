/** @jsxImportSource @emotion/react */

import Dropdown from "@/app/atoms/Dropdown"
import TextInput from "@/app/atoms/Input"
import Box from "@/app/atoms/Box"
import Button from "@/app/atoms/Button"
import Label from "@/app/atoms/Label"
import { flexRowCentering, flexColumnCentering } from "@/app/styles/flex";
import { useState } from "react"
import {poppinsMediumFontStyle, poppinsLargeFontStyle,robotoMediumCenterFontStyle,poppinsSmallFontStyle} from "@/app/styles/font"
import { userNameAtom, nickNameAtom, birthAtom } from './JAtoms';
import { useAtom } from 'jotai/react';
import useUserInformation from "./useUserInformation"


export default function userInformation(){
    const [userName] = useAtom(userNameAtom);
    const [nickName] = useAtom(nickNameAtom);
    const [birth] = useAtom(birthAtom);

    const {
        handleNameChange,
        handleNickNameChange,
        handleBirthChange
    } = useUserInformation();

    return(
        <Box css={wrapperStyle}>
            <Box>
                <Label css={headerStyle}>회원정보 입력</Label>
            </Box>
            <Box css={textStyle}>
                <Label>편리한 서비스 제공을 위한<br/>프로필 정보를 입력해주세요</Label>
            </Box>
            <Box>
                <Label css={poppinsSmallFontStyle}>이름</Label>
                <TextInput css ={InputStyle}
                onChange={handleNameChange}
                value={userName}
                placeholder="이름"
                width={341}
                height={46}/>
            </Box>
            <Box>
                <Label css={poppinsSmallFontStyle}>닉네임</Label>
                <TextInput css={nickNameInputStyle}
                onChange={handleNickNameChange}
                value={nickName}
                placeholder="세심한 빨간 사과"
                width={341}
                height={46}/>
            </Box>
            <Box>
                <Label css={poppinsSmallFontStyle}>생년월일</Label>
                <Box css={birthWrapperStyle}>
                    <TextInput css={InputStyle}
                        onChange={handleBirthChange}
                        value={birth}
                        placeholder="생년월일 6자리"
                        width={341}
                        height={46}/>
                    <Button
                        css={(birth.length === 6 && userName.length >= 1 && nickName.length >= 1) ? enabledBtnStyle : disabledBtnStyle}
                        onClick={() => {}}
                        disabled={!(birth.length === 6 && userName.length >= 1 && nickName.length >= 1)}>
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
    marginTop : "15px",
    ...poppinsLargeFontStyle
}

const textStyle = {
    marginTop: "20px",
    marginBottom : "10px",
    ...flexRowCentering,
    ...robotoMediumCenterFontStyle,
}

const InputStyle = {
    gap : "30px",
    border : "1px solid black",
    borderRadius : "10px",
    padding : "0px 0px 0px 5px",
    marginBottom : "20px",
    marginTop : "5px",
    ...poppinsMediumFontStyle
}

const nickNameInputStyle = {
    gap : "30px",
    border : "1px solid black",
    borderRadius : "10px",
    padding : "0px 0px 0px 8px",
    marginBottom : "20px",
    marginTop : "5px",
    ...poppinsMediumFontStyle
}

const birthWrapperStyle = {
    ...flexColumnCentering
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
    marginTop : "20px",
}

const disabledBtnStyle = {
    width : "341px",
    height : "40px",
    gap : "8px",
    background : "#FFFFFF" ,
    borderRadius: "30px", 
    color: "#575757",
    padding: "6px 12px 6px 12px", 
    ...poppinsMediumFontStyle,
    textAlign: "center" as const,
    marginTop : "20px",
}