// userInformation/useUserInformation.ts

import { useAtom } from "jotai";
import { userNameAtom, nickNameAtom, birthAtom } from './JAtoms';

export default function useUserInformation() {
    const [userName, setUserName] = useAtom(userNameAtom);
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    };

    const [nickName, setNickName] = useAtom(nickNameAtom);
    const handleNickNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNickName(event.target.value);
    };

    const [birth , setBirth] = useAtom(birthAtom);
    const handleBirthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // 숫자만 입력 가능하도록 처리
        if (!event.target.value || /^[0-9\b]+$/.test(event.target.value)) {
            // 6자리 제한 추가
            if (event.target.value.length <= 6) {
                setBirth(event.target.value);
            }
        }
    };
    
   return{
       handleNameChange,
       handleNickNameChange,
       handleBirthChange,
   }
}
