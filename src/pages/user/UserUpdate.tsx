"use client";

import axios, { AxiosResponse } from "axios";
import { FormEvent, useState, ChangeEvent } from "react";
import { UserUpdate, UserUpdateResponseDto } from "../../types/user/UserUpdate";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  username : yup.string().required("닉네임을 입력해주세요").min(2,"2자 이상 입력해주세요!"),
  password: yup
  .string()
  .matches(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,}$/,
    "8글자 이상 문자, 숫자, 특수문자를 조합해서 입력하세요"
  ),
  phone: yup
  .string()
  .matches(/^\d{3}-\d{4}-\d{4}$/, "전화번호 형식이 올바르지 않습니다.")
  .required(),
  birth: yup.string().required("생년월일을 입력해 주세요"),
})

export default function UserUpdate() {
  const [editData, setEdit] = useState<UserUpdate>({
    username: "병주",
    password: "4790rere@",
    phone: "010-7329-7895",
    birth: "99-02-05",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserUpdate>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEdit({ ...editData, [name]: value });
  };

  const onSubmit: SubmitHandler<UserUpdate> = async () => {
    try {
      const response: AxiosResponse<UserUpdateResponseDto> = await axios.put(
        "http://www.ideaconnect.online/user",
        editData
      );
      // 상태 코드에 따른 처리
      if (response.status === 200) {
        // 성공적으로 처리된 경우
        alert("변경되었습니다");
      } else if (response.status === 400) {
        // 잘못된 요청인 경우
        // false 데이터 다시 작성해달라고 요청하기
        const { data } = response;
        if (data) {
          // 서버에서 false 값을 받아옴
          const { username, phone, birth } = data;
          if (username === false) {
            alert("닉네임이 올바르지 않습니다.");
          }
          if (phone === false) {
            alert("전화번호 형식이 올바르지 않습니다.");
          }
          if (birth === false) {
            alert("생년월일 형식이 올바르지 않습니다.");
          }
        }
      } else if (response.status === 500) {
        // 서버 내부 오류인 경우
        alert("다시 시도해주세요");
      }
    } catch (error) {
      alert("다시 시도해주세요11");
    }
  };

  return (
    <main>
      <h1>회원정보수정</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Username</label>
          <input
            type="text"
            {...register('username')}
            value={editData.username}
            onChange={handleChange}
            
          />
          {errors.username && <p>{errors.username.message}</p>}
        </div>
        <div>
          <label>Password</label>
          <input
            type="text"
            {...register('password')}
            value={editData.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div>
          <label>Phone</label>
          <input
            type="text"
            {...register('phone')}
            value={editData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p>{errors.phone.message}</p>}
        </div>
        <div>
          <label>Birth</label>
          <input
            type="text"
            {...register('birth')}
            value={editData.birth}
            onChange={handleChange}
          />
        </div>
        <button type="submit" style={{ width: "100px", height: "100px" }}>
          update
        </button>
      </form>
    </main>
  );
}