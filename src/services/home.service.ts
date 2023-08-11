import { ILogin } from '@/helpers/validation';
import { EnumTypes } from '@/enums/type.enums';
import { HomeInterface } from '@/types/home.type';
import RepositoryFactory from '@/repository/repositoryFactory';
import { ICoupon } from '@/types/coupon.type';

class HomeService {
  private static instance: HomeService;
  private api: HomeInterface;
  private constructor() {
    this.api = RepositoryFactory.get(
      EnumTypes.HOME
    ) as unknown as HomeInterface;
  }

  public static getInstance(): HomeService {
    if (!HomeService.instance) HomeService.instance = new HomeService();
    return HomeService.instance;
  }

  public async getAllMatches() {
    return await this.api.getAllMatches();
  }

  public async getAllSlots() {
    return await this.api.getAllSlots();
  }

  public async createCoupon(credentials: ICoupon) {
    return await this.api.create(credentials);
  }

}

export default HomeService.getInstance();
