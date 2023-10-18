import { useAtom } from "jotai/react"
import { useState } from "react"
import { newIdentify } from "./JAtom"

export default function useIdentify(){
    const [identify, setIdentify] = useAtom(newIdentify)

    const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newData = {
            ...identify,
            email : e.target.value.toString(),
        }
        setIdentify(newData)
    }

    const handleCertification = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newData = {
            ...identify,
            password : e.target.value.toString(),
        }
        setIdentify(newData)
    }

    return{
        handlePhone,
        handleCertification,
    }
}