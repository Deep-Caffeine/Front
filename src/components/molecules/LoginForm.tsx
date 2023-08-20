import React, { useState } from 'react';
import Input from '../atoms/Input/Input';
import Button from '../atoms/Button/Button';

export default function LoginForm(){
    const [userName, setUserName] = useState("")
    const [userPassword , setUserPassword] = useState("")

    const handleSubmit = () => {
        //로그인 API 구현  
    
      };
    return(
        <div>
            <Input 
            onChange={(e)=> setUserName(e.target.value)}
            value={userName}
            placeholder="아이디를 입력하세요"/>
            <Input 
            onChange={(e)=> setUserPassword(e.target.value)}
            value={userPassword}
            placeholder="비밀번호를 입력하세요"/>
            <Button onClick={handleSubmit} disabled={!userName || !userPassword}>
            로그인
            </Button>
        </div>
    )
}

