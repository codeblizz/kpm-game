type CouponType = {
  rate: number;
  nameOfGames: number;
};

export interface ICoupon {
  coupons: CouponType[];
  addCoupon: (coupon: CouponType) => void;
  deleteCoupon: (coupon: CouponType) => void;
}

export const CouponSlice = (set: any, get: any): ICoupon => ({
  coupons: [{
    rate: 0,
    nameOfGames: 0,
  }],
  addCoupon: (coupon: CouponType) => set({ coupons: { ...get().coupons, coupon } }),
  deleteCoupon: (coupon: CouponType) =>
    set({ coupons: { ...get().coupons, coupon } }),
});
