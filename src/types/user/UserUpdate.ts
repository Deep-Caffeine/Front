export interface UserUpdate {
  // update 이름 바꾸ㅓ야함
  username?: string;
  password?: string;
  phone?: string;
  birth?: string;
  error?: string;
}

export interface UpdateState {
  username: string;
  password: string;
  phone: string;
  birth: string;
}
