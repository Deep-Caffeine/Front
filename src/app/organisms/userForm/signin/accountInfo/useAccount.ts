import { useAtom } from "jotai"
import { newAccountInfo } from "./JAtom"
import { useState } from "react"

export default function useAccount(){
    
    const [accountInfo, setAccountInfo] = useAtom(newAccountInfo)
    const [isSame, setIsSame] = useState<boolean | null>(null)

    const handleId = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newData = {
            ...accountInfo,
            email : e.target.value.toString(),
        }
        setAccountInfo(newData)
    }

    const handlePw = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newData = {
            ...accountInfo,
            password : e.target.value.toString(),
        }
        setAccountInfo(newData)
    }

    const checkPw = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value){
            if(e.target.value.toString() === accountInfo.password){
                setIsSame(true)
            }
            if(e.target.value.toString() !== accountInfo.password){
                setIsSame(false)
            }
        }
        if(e.target.value.toString() === ""){
            setIsSame(null)
        }
    }
    const isFormComplete = () => {
        return accountInfo.email && accountInfo.password && isSame !== null;
      };
    
      
    return{
        handleId,
        handlePw,
        checkPw,
        isSame,
        isFormComplete,
        accountInfo
        
    }
}