import { ILogin, IRegister } from "@/helpers/validation";
import { MainRepositoryInterface } from "@/types/mainRepository.type";

export interface LoginInterface extends MainRepositoryInterface {
  login: (data: ILogin) => Promise<ILogin>;
}

export type authMessageType = {
  msg: string;
};

export interface RegisterInterface extends MainRepositoryInterface {
    register: (data: IRegister) => Promise<unknown>,
  }
