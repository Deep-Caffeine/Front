import { useAtom } from 'jotai';
import { selectedTelecomAtom, phoneNumberAtom, authCodeAtom } from './JAtoms';

export default function useVerification() {
    const [selectedTelecom, setSelectedTelecom] = useAtom(selectedTelecomAtom);
    const [phoneNumber, setPhoneNumber] = useAtom(phoneNumberAtom);
    const [authCode, setAuthCode] = useAtom(authCodeAtom);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedTelecom(event.target.value);
    };

    const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        // 숫자만 입력 가능하도록 처리
        if (!value || /^[0-9\b]+$/.test(value)) {
            // 11자리 제한 추가
            if (value.length <= 11) {
                setPhoneNumber(value);
            }
        }
    };

    const handleAuthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        // 숫자만 입력 가능하도록 처리
        if (!value || /^[0-9\b]+$/.test(value)) {
            // 6자리 제한 추가
            if (value.length <= 6) {
                setAuthCode(value);
            }
        }
    };
    
   return{
       selectedTelecom,
       phoneNumber,
       authCode,
       handleChange,
       handlePhoneChange,
       handleAuthChange,
   }
}