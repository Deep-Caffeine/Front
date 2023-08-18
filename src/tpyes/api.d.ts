import { AxiosRequestConfig } from "axios";

interface CreateRequest {
  method: AxiosRequestConfig["method"];
  endpoint: string;
  params?: {
    [key: string]: string | number | Array<string> | Array<number> | undefined;
  };
  body?:
    | {
        [key: string]: string | number | Array<string> | Array<number> | undefined;
      }
    | FormData;
}

declare type Instance = (args: CreateRequest) => Promise<T>;
declare type RequestFunction<Argument = void> = (args: Argument) => Promise<T>;

export type { Instance, RequestFunction };
