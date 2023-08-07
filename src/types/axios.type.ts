import { AxiosError } from "axios";

export type errorMsgType = {
  name: string;
  status?: boolean;
};

export type errorType = {
  status: boolean;
  data: errorMsgType;
};

export type errorResponseType = {
  data: errorMsgType;
  response: errorType;
};

export interface IError {
  error: errorResponseType;
}

export type AxiosErrorMessageType = {
  statusCode: number;
  message: string;
  name: string;
};

export type AxiosLoginSuccessResponse = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
