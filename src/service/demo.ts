import ErrorHandler from "../model/error-handler";

class Demo {
  defaultMethod = () => {
    if (false) {
      throw new ErrorHandler(501, "Not implemented method");
    }
    return {
      text: `You've reached the ${this.constructor.name} default method`,
    };
  };
}

export = new Demo();
