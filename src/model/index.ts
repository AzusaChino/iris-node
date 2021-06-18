export interface LoginParam {
  username: string;
  password: string;
}

export interface RegisterParam extends LoginParam {
  email: string;
}

export type User = {
  id?: string;
  username: string;
  email?: string;
  // password:string,
  avatar?: string;
  vip: number;
  status: number;
};

export type Section = {
  id: string;
  name: string;
  visual?: string;
};

export type Record = {
  id: string;
  sid: string;
  username: string;
  title: string;
  episode: string;
  status: number;
  watched: number;
  timestamp: number;
  star?: number;
  visual?: string;
  comment?: string;
};
