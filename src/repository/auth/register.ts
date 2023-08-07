import { EnumTypes } from '@/enums/type.enums';
import { IRegister } from '@/helpers/validation';
import MainRepository from '@/repository/mainRepository';

class RegisterRepository extends MainRepository<IRegister> {
  constructor() {
    super(EnumTypes.REGISTER);
  }

}

export default RegisterRepository;
