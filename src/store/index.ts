import { create } from 'zustand';
import { GameSlice, IGames } from '@/store/gameSlice';
import { SlotSlice, ISlots } from '@/store/slotsSlice';
import { CouponSlice, ICoupon } from '@/store/couponSlice';
import { IPlayer, PlayerSlice } from '@/store/playerSlice';
import { persist, devtools, createJSONStorage } from 'zustand/middleware';

export const useAppStore = create<IPlayer & IGames & ICoupon & ISlots>()(
  devtools(
    persist(
      (set, get) => ({
        ...PlayerSlice(set, get),
        ...GameSlice(set, get),
        ...CouponSlice(set, get),
        ...SlotSlice(set, get)
      }),
      {
        name: 'app-store',
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
