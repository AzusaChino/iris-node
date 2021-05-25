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
  id: string;
  name: string;
  visual?: string;
};

export type Record = {
  id: string;
  sid: string;
  uname: string;
  name: string;
  episode: string;
  status: string;
  watched: string;
  timestamp: number;
  star?: number;
  visual?: string;
  comment?: string;
};
