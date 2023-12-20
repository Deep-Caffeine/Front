'use client'
/** @jsxImportSource @emotion/react */

import TextInput from "@/app/atoms/Input"
import Box from "@/app/atoms/Box"
import Button from "@/app/atoms/Button"
import Label from "@/app/atoms/Label"
import { flexRowCentering, flexColumnCentering } from "@/app/styles/flex";
import {poppinsMediumFontStyle, poppinsLargeFontStyle,robotoMediumCenterFontStyle,poppinsSmallFontStyle} from "@/app/styles/font"
import { nickNameAtom, genderAtom , birthAtom, } from './JAtoms';
import { useAtom , useAtomValue, atom} from 'jotai';
import useUserInformation from "./useUserInformation"
import RandomIcon from './RandomIcon';
import { CSSObject } from '@emotion/react';
import { useRouter } from "next/router";
import { newAccountInfo, numbersAtom } from "../../userForm/signin/accountInfo/JAtom";
import useAccount from "../../userForm/signin/accountInfo/useAccount"

interface UserInformationProps {
    goToAccount: () => void;
  }

export default function userInformation({goToAccount} : UserInformationProps){
    const [numbers, setNumbers] = useAtom(numbersAtom);
    const [accountInfo] = useAtom(newAccountInfo);
    const [nickName] = useAtom(nickNameAtom);
    const [gender, setGender] = useAtom(genderAtom);
    const [birth] = useAtom(birthAtom);
    const {
        phoneNumber,
        handleNickNameChange,
        handleGenderChange,
        handleBirthChange,
        generateRandomNickname,
        handleRandomNickNameChange,
        sendSignupData,
    } = useUserInformation();
    
    const accountToGoClick = () => {
        goToAccount()
    }
    const handleClick = () => {
        console.log(accountInfo)
        console.log(nickName)
        console.log(gender)
    }

    return(
        <Box css={wrapperStyle}>
            <Box>
                <Label css={headerStyle}>회원정보 입력</Label>
            </Box>
            <Box css={textStyle}>
                <Label>편리한 서비스 제공을 위한 프로필 정보를 입력해주세요</Label>
            </Box>
            <Box css={nickNameWrapperStyle}>
                <Label css={poppinsSmallFontStyle}>닉네임</Label>
                <div style={{ position: 'relative', display: 'inline-block' }}>
                    <TextInput 
                        css={{...nickNameInputStyle, paddingRight: '0px'}}  // 아이콘 위치를 위해 패딩 추가
                        onChange={handleNickNameChange}
                        value={nickName}
                        placeholder="닉네임을 설정해주세요"
                        width={314}
                        height={46} />
                    <Button onClick={handleRandomNickNameChange} style={{ position: 'absolute', right: 10, top: 16 }}>
                    <RandomIcon />
                    </Button>
                </div>
            </Box>
            <Box>
                <Label css={poppinsSmallFontStyle}>성별</Label>
                <Button onClick={() => handleGenderChange('남자')} style={gender === 'male' ? {...selectedGenderStyle, ...manBtnStyle} : {...unselectedGenderStyle, ...manBtnStyle}}>남자</Button>
                <Button onClick={() => handleGenderChange('여자')} style={gender === 'female' ? selectedGenderStyle : unselectedGenderStyle}>여자</Button>
            </Box>
            <Box>
                <Label css={poppinsSmallFontStyle}>생년월일</Label>
                <Box css={birthWrapperStyle}>
                    <TextInput css={InputStyle}
                        onChange={handleBirthChange}
                        value={birth}
                        placeholder="생년월일 6자리"
                        width={314}
                        height={46}/>
                </Box>
            </Box>
            <Box css={btnWrapperStyle}>
                <Label onClick={accountToGoClick}>
                    뒤로 가기     
                </Label>
                <div style={spacerStyle} />
                <Button
                    css={(birth.length === 6  && nickName.length >= 1 && gender) ? enabledBtnStyle : disabledBtnStyle}
                    onClick={handleClick} 
                    disabled={!(birth.length === 6  && nickName.length >= 1 && gender)}>
                    다음
                </Button>
            </Box>
        </Box>
    )
}

const wrapperStyle = {
    borderRadius: "15px",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    margin : "auto",
    ...flexColumnCentering,
}

const headerStyle = {
    marginTop : "38px",
    ...poppinsLargeFontStyle
}

const textStyle = {
    marginTop: "20px",
    marginBottom : "58px",
    ...flexRowCentering,
    ...robotoMediumCenterFontStyle,
}
const nickNameWrapperStyle : CSSObject = {
    boxSizing : 'border-box',
    marginLeft : "84px",
    marginRight : "84px"
}

const InputStyle = {
    
    gap : "30px",
    border: "1px solid #0000001A",
    borderRadius : "10px",
    padding : "0px 0px 0px 5px",
    marginBottom : "20px",
    marginTop : "5px",
    
    ...poppinsMediumFontStyle
}

const nickNameInputStyle: CSSObject = {
    boxSizing : 'border-box',
    gap : "30px",
    border: "1px solid #0000001A",
    borderRadius : "10px",
    padding : "0px 0px 0px 8px",
    marginBottom : "10px",
    marginTop : "4px",
    ...poppinsMediumFontStyle
}
const genderButtonStyle = {
    width : "152px",
    height : "36px",
    borderRadius: "10px", 
    border: "1px solid #0000001A",
    gap : "30px", 
    marginTop : "4px",
    marginBottom : "10px",
  };
const manBtnStyle = {
    marginRight : "10px",
    ...genderButtonStyle
}
  const selectedGenderStyle = {
     ...genderButtonStyle,
     background:'#3700B3', 
     color:'#FFFFFF'
  };
  
  const unselectedGenderStyle = { 
     ...genderButtonStyle,
     background:'#FFFFFF', 
     color:'#575757'  
  };

const birthWrapperStyle = {
    ...flexColumnCentering
}

const btnWrapperStyle = {
    marginTop : "79px",
    marginBottom:  "30px",
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center', // 이 부분 추가
    ...robotoMediumCenterFontStyle
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
const spacerStyle = {
    width: '229px',
}