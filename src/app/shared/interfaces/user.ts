export interface UserResponse<T>{
  status: number;
  data: T;
}

export interface User  {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password_confirmation: string;
}