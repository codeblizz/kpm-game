import { ILogin } from '@/helpers/validation';
import { EnumTypes } from '@/enums/type.enums';
import axiosClient from '@/helpers/axios/client';
import MainRepository from '@/repository/mainRepository';

class LoginRepository extends MainRepository<ILogin> {
  constructor() {
    super(EnumTypes.LOGIN);
  }

  async login(payload: ILogin) {
    return await axiosClient.post('/api/login', { ...payload });
  }
  
}

export default LoginRepository;
