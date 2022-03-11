export interface Iusers {
  email?: string;
  password?: string;
  id?: string;
  name?: string;
}
export interface ICridentialLogin {
  email?: string;
  password?: string;
  name?: string;
}

export interface IStateInitial {
  users: Iusers[];
  token: boolean;
  loading: boolean;
  isError: boolean;
  CurrentUser: ICridentialLogin;
  errorText: string;
  language: string;
}
