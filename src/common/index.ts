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

const ok = (data: any) => {
  return new RestResponse<any>(200, data, "success");
};

const fail = (message: string) => {
  return new RestResponse<null>(1001, null, message);
};
