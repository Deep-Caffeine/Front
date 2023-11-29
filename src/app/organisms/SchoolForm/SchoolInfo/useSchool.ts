import { useAtom } from "jotai/react"
import { SchoolInfo } from "./JAtom";

export default function useSchool(){
    const [schoolInfo, setSchoolInfo] = useAtom(SchoolInfo)
    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newData = {
            ...schoolInfo,
            name : e.target.value,
        }
        setSchoolInfo(newData)
    }

    const handleDepartment = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newData = {
            ...schoolInfo,
            department : e.target.value,
        }
        setSchoolInfo(newData)
    }

    const handleStatus = (status: '재학' | '휴학' | '졸업유예' | '졸업') => {
      const newData = {
          ...schoolInfo,
          status : status,
      }
      setSchoolInfo(newData)
  }

  const handleGrade= (grade: '1학년' | '2학년' | '3학년' | '4학년 이상') => {
      // Assuming grade is a number
      let gradeNumber;
      
       if(grade){
           gradeNumber= grade;
       } else{
           gradeNumber="";
       }
       
         const newData ={
             ...schoolInfo,
             grade :gradeNumber
         };
         setSchoolInfo(newData);
     };

     // 백엔드 api
     

     return{
          handleName,
          handleDepartment ,
          handleStatus ,
          handleGrade,
     };
}
