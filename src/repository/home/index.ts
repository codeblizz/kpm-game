import { EnumTypes } from '@/enums/type.enums';
import MainRepository from '@/repository/mainRepository';
import serverClient from '@/helpers/axios/server';

type Home = {
  
}

class HomeRepository extends MainRepository<any> {
  constructor() {
    super(EnumTypes.HOME);
  }

}

export default HomeRepository;
