import React, { useState, useEffect } from 'react';
import zxcvbn from 'zxcvbn';
import Box from '../atoms/Box';
import Label from '../atoms/Label';

interface PropsType{
  input : "string"
}

export default function IsStrong({input}:PropsType){
  const [score, setScore] = useState<number>(999)
  const handleScore = (input:string) => {
    const result = zxcvbn(input)
    setScore(result.score)
  }
  useEffect(()=>{
    if(input){
        handleScore(input)
        console.log(score)  
      }
  }, [input])
  
  const handleGrade = (score:number) => {
    switch(score){
        case 0:
            return "낮음";
        case 1:
            return "낮음";
        case 2:
            return "보통";
        case 3:
            return "높음";
        case 4:
            return "높음";
      }
  }
  

  return(
    <Box css={barBoxStyle}>
        {
            <>
                <Box css={redBar(score)}></Box>
                <Box css={yellowBar(score)}></Box>
                <Box css={greenBar(score)}></Box>
                <Label css={gradeTextStyle(score)}>보안등급 : {handleGrade(score)}</Label>
            </>
        }
    </Box>
  );
}

const barBoxStyle = {
    display: "flex",
    flexDirection: "row" as const,
    gap: "4px",
    marginTop: "5px",
    marginLeft: "2px"
}

const redBar = (score: number) => ({
    width: "70px",
    height: "4px",
    marginTop: "5px",
    borderRadius: "2.162px 0px 0px 2.162px",
    background: `${score > 0 ? "#F57C7B" : "grey"}`,
})

const yellowBar = (score: number) => ({
    width: "70px",
    height: "4px",
    marginTop: "5px",
    borderRadius: "2.162px 0px 0px 2.162px",
    background: `${score > 1 ? "#EFBD70" : "grey"}`,
})

const greenBar = (score: number) => ({
    width: "70px",
    height: "4px",
    marginTop: "5px",
    borderRadius: "2.162px 0px 0px 2.162px",
    background: `${score > 2 ? "#6BBF9E" : "grey"}`,
})

const gradeTextStyle = (score: number) => ({
    fontFamily: 'Poppins, sans-serif',
    fontSize: '8px',
    fontWeight: 500,
    lineHeight: '17px',
    letterSpacing: '0em',
    textAlign: 'left' as const,
    maring: "0px"
})