"use client";

import axios from "axios";

export default function Home() {
  const handleClick = async () => {
    const jwtToken = "토큰";
    const request = new Request("username", "phone", "password", jwtToken);
    const response: Response = await request.send();
    console.log("Response: ", response);
    console.log("Coupert item: ", response.CoupertItem);
  };

  return (
    <main>
      <button style={{ width: "100px", height: "100px" }} onClick={handleClick}>
        update
      </button>
    </main>
  );
}

export class Request {
  username?: string;
  phone?: string;
  password?: string;
  jwtToken: string;

  constructor(
    jwtToken: string,
    username?: string,
    phone?: string,
    password?: string
  ) {
    this.username = username;
    this.phone = phone;
    this.password = password;
    this.jwtToken = jwtToken;
  }
  async send(): Promise<Response> {
    if (!this.jwtToken) {
      throw new Error("JWT token is 필요합니다");
    }

    const result = await axios.post("https://localhost:8080/user", this, {
      headers: {
        Authorization: `Bearer ${this.jwtToken}`,
      },
    });

    // 서버로부터의 실제 응답 형식에 따라이 부분을 조정하세요
    const { data, statusCode, message, coupertItem } = result.data;
    return new Response(data, statusCode, message, coupertItem);
  }
}

export class Response {
  data: object;
  StatusCode: number;
  Message: string;
  CoupertItem: any; // 속성의 유형을 필요에 따라 업데이트 하세요

  constructor(
    data: object,
    statusCode: number,
    message: string,
    coupertItem: any
  ) {
    this.data = data;
    this.StatusCode = statusCode;
    this.Message = message;
    this.CoupertItem = coupertItem;
  }
}
