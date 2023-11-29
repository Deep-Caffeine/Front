import { useAtom } from 'jotai';
import { nullValueAtom, keywordSearchAtom, chatStyleSelectionAtom } from './JAtoms';

export default function useChat() {
    const [nullValue, setNullValue] = useAtom(nullValueAtom);
    const [keywordSearch, setKeywordSearch] = useAtom(keywordSearchAtom)
    const [chatStyle,setChatStyle] = useAtom(chatStyleSelectionAtom)

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setNullValue(event.target.value);
    };
    const handlekeywordSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setKeywordSearch(event.target.value);
    };
    const handlechatStyleChange =  (newChat: 'Unique' | 'Normal' | 'Smart') => {
        setChatStyle(newChat);
     };
    
   return{ 
        chatStyle,
        nullValue,
        keywordSearch,
        handleChange,
        handlekeywordSearchChange,
        handlechatStyleChange,

        
   }
}