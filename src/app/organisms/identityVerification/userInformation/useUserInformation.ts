// userInformation/useUserInformation.ts

import { useAtom } from "jotai";
import { nickNameAtom, genderAtom, birthAtom } from './JAtoms';

export default function useUserInformation() {

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
    const [, setGender] = useAtom(genderAtom);
    const handleGenderChange = (newGender: 'male' | 'female') => {
       setGender(newGender);
    };
    const adjectives = ["심심한", "열심히하는", "유능한", "창조적인", "재미있는"];
    const nouns = ["사과", "사자", "컴퓨터", "공학자", "음악가"];
    function generateRandomNickname() {
        const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
        const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
        const randomNumber = Math.floor(Math.random() * 100) + 1; // 1 ~ 100 사이의 랜덤 정수

        return `${randomAdjective} ${randomNoun}${randomNumber}`; 
    }
    function handleRandomNickNameChange(){
        setNickName(generateRandomNickname());
     }
   return{

       handleNickNameChange,
       handleBirthChange,
       handleGenderChange,
       generateRandomNickname,
       handleRandomNickNameChange,
   }
}
