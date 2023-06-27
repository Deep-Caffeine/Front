export interface UserUpdate {
  username: string;
  password: string;
  phone: string;
  birth: string;
}

export interface UserUpdateResponseDto {
  error?: string;
  password?: boolean;
  username?: boolean;
  phone?: boolean;
  birth?: boolean;
}
