export type LoginParam = {
  username: string;
  password: string;
};

export type User = {
  id?: string;
  username: string;
  email?: string;
  // password:string,
  avatar?: string;
  vip: string;
  status: string;
};

export type Section = {
  id?: string;
  name: string;
  src: string;
};

export type Record = {
  id?: string;
  sid: string;
  uname: string;
  name: string;
  timestamp: number;
  season?: string;
  episode?: string;
  visual?: string;
  star?: number;
  comment?: string;
};
