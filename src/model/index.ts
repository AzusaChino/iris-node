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
  date: string;
  season?: string;
  episode?: string;
  visual?: string;
  star?: string;
  comment?: string;
};
