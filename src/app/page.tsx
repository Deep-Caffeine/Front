import axios from "axios";

export default function Home() {
  const handleClick = async () => {
    const request = new Request("username", "phone", "password");
    const response: Response = await request.send();
    console.log(response);
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

  constructor(username?: string, phone?: string, password?: string) {
    this.username = username;
    this.phone = phone;
    this.password = password;
  }
  async send(): Promise<Response> {
    return await axios.post("http://localhost:8080/user", this);
  }
}

export class Response {
  data: object;
  StatusCode: number;
  Message: string;

  constructor(data: object, statusCode: number, message: string) {
    this.data = data;
    this.StatusCode = statusCode;
    this.Message = message;
  }
}
