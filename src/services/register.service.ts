import { EnumTypes } from '@/enums/type.enums';
import { IRegister } from '@/helpers/validation';
import RepositoryFactory from '@/repository/repositoryFactory';
import { RegisterInterface } from '@/types/auth.type';

class RegisterService {
  private static instance: RegisterService;
  private api: RegisterInterface;
  private constructor() {
    this.api = RepositoryFactory.get(
      EnumTypes.REGISTER
    ) as unknown as RegisterInterface;
  }

  public static getInstance(): RegisterService {
    if (!RegisterService.instance)
      RegisterService.instance = new RegisterService();
    return RegisterService.instance;
  }

  public async registration(payload: IRegister) {
    return await this.api.create(payload);
  }

}

export default RegisterService.getInstance();
