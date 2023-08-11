import { ILogin, IRegister } from "@/helpers/validation";
import { MainRepositoryInterface } from "@/types/mainRepository.type";

export interface LoginInterface extends MainRepositoryInterface {
  login: (data: ILogin) => Promise<ILogin>;
}

export type AuthMessage = {
  msg: string;
};

export type Toast = {
  infoMsg: AuthMessage;
  errorMsg: AuthMessage;
}

export interface IToast {
  setInfoMsg: (v: AuthMessage) => void;
  setErrorMsg: (v: AuthMessage) => void;
};

export interface RegisterInterface extends MainRepositoryInterface {
    register: (data: IRegister) => Promise<unknown>,
  }
