import HomeRepository from '@/repository/home';
import { EnumTypes } from '../enums/type.enums';
import LoginRepository from '@/repository/auth/login';
import RegisterRepository from '@/repository/auth/register';

class RepositoryFactory {
  get(name: EnumTypes) {
    switch (name) {
      case EnumTypes.REGISTER:
        return new RegisterRepository();
      case EnumTypes.LOGIN:
        return new LoginRepository();
      case EnumTypes.HOME:
        return new HomeRepository();
      default:
        break;
    }
  }
}

export default new RepositoryFactory();
