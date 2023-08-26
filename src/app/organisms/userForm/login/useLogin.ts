import { useAtom } from "jotai/react"
import { AccountInfo } from './JAtom';

export default function useLogin(){
    const [accountInfo, setAccountInfo] = useAtom(AccountInfo)

    const handleId = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newData = {
            ...accountInfo,
            id : e.toString(),
        }
        setAccountInfo(newData)
    }

    const handlePw = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newData = {
            ...accountInfo,
            password : e.toString(),
        }
        setAccountInfo(newData)
    }

    return{
        handleId,
        handlePw,
    }
}