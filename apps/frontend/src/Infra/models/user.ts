export interface LoginModel {
  email: string;
  password: string;
}

export interface UserModel extends LoginModel {
  idUser: number;
  token: string;
  role: string;
}
