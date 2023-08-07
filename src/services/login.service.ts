import { ILogin } from '@/helpers/validation';
import { EnumTypes } from '@/enums/type.enums';
import { LoginInterface } from '@/types/auth.type';
import RepositoryFactory from '@/repository/repositoryFactory';

class LoginService {
  private static instance: LoginService;
  private api: LoginInterface;
  private constructor() {
    this.api = RepositoryFactory.get(
      EnumTypes.LOGIN
    ) as unknown as LoginInterface;
  }

  public static getInstance(): LoginService {
    if (!LoginService.instance) LoginService.instance = new LoginService();
    return LoginService.instance;
  }

  public async login(credentials: ILogin) {
    return await this.api.login(credentials);
  }

}

export default LoginService.getInstance();
