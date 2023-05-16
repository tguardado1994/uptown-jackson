export interface CreateUser {
  email: string
  password: string
}

export interface UserResponse<T>{
  token: string;
  expires_in: number;
  refresh_token: string;
  token_type: 'Bearer'
  resource_owner: T
}

export interface User {
   //first_name: string;
   //last_name: string;
  email: string;
}
