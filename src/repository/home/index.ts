import { EnumTypes } from '@/enums/type.enums';
import axiosClient from '@/helpers/axios/client';
import MainRepository from '@/repository/mainRepository';

class HomeRepository extends MainRepository<any> {
  constructor() {
    super(EnumTypes.HOME);
  }

  async getAllSlots() {
    return await axiosClient.get('/api/slots');
  }

  async getAllMatches() {
    return await axiosClient.get('/api/matches');
  }
}

export default HomeRepository;
