export type Coupon = {
  rate: number;
  nameOfGames: string;
};

export interface ICoupon {
  coupons: Coupon[];
  addCoupon: (coupon: Coupon) => void;
  deleteCoupon: (coupon: Coupon) => void;
}
