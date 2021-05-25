class RestResponse<T> {
  private code: number;
  private data: T;
  private message: string;

  constructor(code: number, data: T, message: string) {
    this.code = code;
    this.data = data;
    this.message = message;
  }
}

type Response = {
  code?: number;
  data?: any;
  message?: string;
};

export const ok = (r: Response) => {
  return new RestResponse<any>(
    r.code || 200,
    r.data || {},
    r.message || "success"
  );
};

export const fail = (r: Response) => {
  return new RestResponse<any>(r.code || 500, {}, r.message || "failed");
};

type Count = {
  cnt: number;
};

export type CountResult = Array<Count>;

export const accessSecret = "azusawakohane";
export const refreshSecret = "nakanoazusa";
// as local cache
export const refreshTokens: Array<String> = [];

export type JwtPayLoad = {
  username: string;
};

export type RecordSearchParam = {
  sid: string;
  username: string;
  pageIndex: any;
  pageSize: any;
};

export interface InsertResult {
  insertId: string;
}

export interface UpdateResult {
  affectedRows: number;
}
