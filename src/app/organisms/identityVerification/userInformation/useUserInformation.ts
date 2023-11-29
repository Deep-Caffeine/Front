// userInformation/useUserInformation.ts

import { useAtom } from "jotai";
import { nickNameAtom, genderAtom, birthAtom } from './JAtoms';
import { newAccountInfo } from "../../userForm/signin/accountInfo/JAtom";
import { phoneNumberAtom } from "../../identityVerification/verification/JAtoms";
export default function useUserInformation() {
    
    const [phoneNumber, setPhoneNumber] = useAtom(phoneNumberAtom);
    const [nickName, setNickName] = useAtom(nickNameAtom);
    const [accountInfo] = useAtom(newAccountInfo);
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
    const [gender, setGender] = useAtom(genderAtom);
    const handleGenderChange = (newGender: '남자' | '여자') => {
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

     //api 통신
     const sendSignupData = async () => {
        const res = await fetch('http://cloud.swdev.kr:4003/user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: accountInfo.email,
            password: accountInfo.password,
            nickname: nickName,
            gender: gender,
            birth: birth,
            phoneNumber: phoneNumber,
          })
        });
      
        if (res.ok) {
            alert('회원가입이 완료되었습니다.');
        } else {
            const errorData = await res.json();
            console.error(errorData);
        }
      };
   return{
    phoneNumber,
       handleNickNameChange,
       handleBirthChange,
       handleGenderChange,
       generateRandomNickname,
       handleRandomNickNameChange,
       sendSignupData,
       accountInfo
      
   }
}
