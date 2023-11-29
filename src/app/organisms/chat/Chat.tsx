/** @jsxImportSource @emotion/react */
import useChat from "./useChat";
import TextInput from "@/app/atoms/Input"
import Box from "@/app/atoms/Box"
import Button from "@/app/atoms/Button"
import Label from "@/app/atoms/Label"
import { flexRowCentering, flexColumnCentering,flexRowSpaceBetween } from "@/app/styles/flex";
import { useAtom } from 'jotai/react';
import alarmIcon from './image/alarm.svg';
import Profile from './image/profile.svg'
import Dropdown from "@/app/atoms/Dropdown";
import { nullValueAtom } from "./JAtoms";
import {robotoMediumCenterFontStyle,robotoMediumFontStyle,robotoMLargeFontStyle,robotoLLargeFontStyle,suiteMediumFontStyle,suiteLargeFontStyle,suiteMediumCenteringFontStyle} from "@/app/styles/font"
import { CSSObject } from "@emotion/react";
export default function chat(){
    const nullValues = [
        { value: '빈 값', label: '빈 값' },
    ];
    const {
        chatStyle,
        nullValue,
        keywordSearch,
        handleChange,
        handlekeywordSearchChange,
        handlechatStyleChange} = useChat();
    return(
        <Box css={flexRowCentering}>
            <Box css={sideBarWrapperStyle}> 
                <Box css={flexRowSpaceBetween}>
                    <Label css={sideBarHeaderLabel}>Fo Po Chat</Label>
                    <img src={alarmIcon}  />
                </Box>
                <Box css={profileImgNicknameBox}>
                    <img src={Profile}/>
                    <Label css={sideBarNickname}>똑똑한 청년</Label>
                </Box>
                <Box css={sideBarDropdownWrapper}>
                    <Dropdown 
                        css={sideBarDropdownStyle}
                        onChange={handleChange}
                        value={nullValue} // 이 부분 추가
                        options={nullValues}
                        placeholder="전체"
                    />
                    <TextInput
                        css={chatKeywordSearch}
                        onChange={handlekeywordSearchChange}
                        value={keywordSearch}
                        placeholder="대화 키워드 검색"
                        width={246}
                        height={49}
                        />
                </Box>
                <Box style={{ marginBottom: '26px' }}>
                    <Label css={robotoMediumFontStyle}>Inventory</Label>
                    <Box css={inventoryItemWrapper}>
                        <Box css={inventoryitemStyle}>
                            <Box css={flexRowSpaceBetween}>
                                <img src={Profile}/>
                                <Label>사진/동영상</Label>
                            </Box>
                            
                            <Label>21.53MB</Label>
                        </Box>
                        <Box css={inventoryitemStyle}>
                            <Box css={flexRowSpaceBetween}>
                                <img src={Profile}/>
                                <Label>파일</Label>
                            </Box>
                            <Label>26.53MB</Label>
                        </Box>
                        <Box css={inventoryitemStyle}>
                            <Box css={flexRowSpaceBetween}>
                                <img src={Profile}/>
                                <Label>링크</Label>
                            </Box>
                            <Label>23.53KB</Label>
                        </Box>
                    </Box>
                </Box>
                <Label css={robotoMediumFontStyle} style={{marginBottom:"11px"}}>Supporting Chat</Label>
                <Box css={supportingChatwrapper}>
                    <Label css={robotoLLargeFontStyle}>Frontend Developer</Label>
                    <Label css={suiteMediumFontStyle}>박병주님의 보유역량/관심사 기반 추천 직무 : 프론트엔드
                        박병주님의 단계 맞춤 커리큘럼 서비스
                        1. html/css 강의듣기
                        2. JavaScript 강의듣기
                        3. React 강의듣기
                    </Label>
                </Box>
                <Label css={robotoMediumFontStyle} style={{marginBottom:"11px"}}>Today Chat</Label>
                <Box css={todayChatWrapper}>
                    <Label css={todayChatHeader}>프론트엔드개발자 역량</Label><br/>
                    <Label css={todayChatContent}>프론트엔드 개발자들은 창의적인 문제 해결 능력이 필요하며, 기술적인 지식과 디자인 감각이 합쳐진 역량이 요구됩니다. </Label>
                    <div css={contour}></div>
                    <Label css={todayChatHeader}>프론트엔드개발자 역량</Label><br/>
                    <Label css={todayChatContent}>프론트엔드 개발자들은 창의적인 문제 해결 능력이 필요하며, 기술적인 지식과 디자인 감각이 합쳐진 역량이 요구됩니다. </Label>
                    <div css={contour}></div>
                </Box>
                
            </Box>
            <Box>
                <Box>
                    <img src={Profile}/>
                    <Box css={chatHeader}>
                        <Label style={{marginBottom : "15px"}}>반갑습니다</Label>
                        <Box css={flexRowCentering}>
                            <Label css={suiteLargeFontStyle}style={{color : "#3300FF", marginBottom:"15px"}}>FoPo</Label>
                            <Label style={{marginBottom : "15px"}}>입니다!</Label>
                        </Box>
                        
                        <Label style={{marginBottom : "15px"}} >똑똑한 청년님의 고민을 덜어드릴게요.</Label>
                        <Label style={{marginBottom : "15px"}} >대화 스타일 선택</Label>
                    </Box>
                    
                    <Box>
                    <Button css={chatStyle === 'Unique' ? chatStyleBtnSelected : chatStyleBtnUnique} onClick={() => handlechatStyleChange('Unique')}>Unique</Button>
                    <Button css={chatStyle === 'Normal' ? chatStyleBtnSelected : chatStyleBtn} onClick={() => handlechatStyleChange('Normal')}>Normal</Button>
                    <Button css={chatStyle === 'Smart' ? chatStyleBtnSelected : chatStyleBtnSmart} onClick={() => handlechatStyleChange('Smart')}>Smart</Button>
                    </Box>
                    
                </Box>
            </Box>
        </Box>
    )
}
const profileImgNicknameBox: CSSObject = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start', 
    marginBottom:"21px",
};
const sideBarWrapperStyle = {
    paddingLeft : "20px",
    paddingTop : "14px",
    paddingBottom :"14px",
    paddingRight : "16px",
    width : "440px",
    height : "1305px",
    backgroundColor : "#F5F0FF",
    marginLeft : "63px"

}
const sideBarHeaderLabel = {
    color : "#3300FF",
    fontFamily: 'SUITE',
    fontSize: '20px',
    fontWeight: "900",
    lineHeight: '36px',
    letterSpacing: '0em',
    textAlign: 'left' as const,
}
const sideBarProfileImg = {

}
const sideBarNickname = {
    color : "#000000",
    ...robotoLLargeFontStyle
}
const sideBarDropdownWrapper = {
    marginBottom: "18px",
    ...flexRowSpaceBetween
}

const inventoryItemWrapper = {
    width : "407px",
    height : "114px",
    paddingLeft : "20px",
    paddingTop : "17px",
    paddingRight : "17px",
    backgroundColor : "#EFEFF08A",
    ...suiteMediumFontStyle
}
const inventoryitemStyle = {
    marginBottom: "15px",
    ...flexRowSpaceBetween
}
const sideBarDropdownStyle = {
    width : "147px",
    height : "49px",
    backgroundColor : "#BFBFBF33",
    color : "#929292",
    paddingLeft : "16px", 
    marginRight : "12px",
    borderRadius : "10px",
    ...robotoMediumFontStyle
}
const chatKeywordSearch:CSSObject = {
    boxSizing : 'border-box',
    width : "246px",
    height : "49px",
    backgroundColor : "#F2F2F2",
    color : "#929292",
    borderRadius : "10px",
    ...robotoMediumFontStyle
}
const supportingChatwrapper = {
    width : "407px",
    paddingLeft : "20px",
    paddingTop : "17px",
    paddingRight : "17px",
    paddingBottom : "17px",
    backgroundColor : "#EFEFF08A",
    marginBottom : "27px",
    
}
const todayChatWrapper = {
    width : "407px",
    height : "600px",
    paddingLeft : "30px",
    paddingTop : "26px",
    paddingBottom : "17px",
    backgroundColor : "#EFEFF08A",
    marginBottom : "27px",
}
const todayChatHeader={
    marginBottom : "18px",
    ...robotoLLargeFontStyle
}
const todayChatContent={
    marginBottom : "16px",
    ...robotoMLargeFontStyle
}
const contour= {
    width : "380px",
    border : "solid 1px #0000004D",
    marginBottom : "21px"
}
const chatHeader = {
    marginTop : "22px",
    ...suiteMediumFontStyle
}
const chatStyleBtn = {
    width : "105px",
    height : "49px",
    backgroundColor : "white",
    border: '1px solid black',
    ...suiteMediumCenteringFontStyle
}
const chatStyleBtnSelected: CSSObject = {
    ...chatStyleBtn,
    backgroundColor: '#3300FF40', 
};
const chatStyleBtnSmart: CSSObject = {
    ...chatStyleBtn,
    borderRadius: '0px 10px 10px 0px',
};

const chatStyleBtnUnique: CSSObject = {
    ...chatStyleBtn,
    borderRadius: '10px 0px 0px 10px',
};