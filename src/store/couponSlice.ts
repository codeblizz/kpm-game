import { Coupon, ICoupon } from '@/types/coupon.type';

export const CouponSlice = (set: any, get: any): ICoupon => ({
  data: [
    {
      rate: 0,
      nameOfGames: '',
    },
  ],
  addCoupon: (coupon: Coupon) => set({ coupons: { ...get().coupons, coupon } }),
  deleteCoupon: (coupon: Coupon) =>
    set({ coupons: { ...get().coupons, coupon } }),
});
