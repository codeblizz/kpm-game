import { ISlots } from '@/types/slots.type';
import { ICoupon } from '@/types/coupon.type';
import { IPlayer } from '@/types/player.type';
import { SlotSlice } from '@/store/slotsSlice';
import { MatchSlice } from '@/store/matchSlice';
import { IMatches } from '@/types/matches.type';
import { CouponSlice } from '@/store/couponSlice';
import { PlayerSlice } from '@/store/playerSlice';
import { createContext, useContext } from 'react';
import { createStore, useStore as useZustandStore } from 'zustand';
import { persist, devtools, createJSONStorage } from 'zustand/middleware';

export type StoreType = ReturnType<typeof initializeStore>;
export type StoreInterface = IPlayer & IMatches & ICoupon & ISlots;

export const zustandContext = createContext<StoreType | null>(null);
export const StoreProvider = zustandContext.Provider;

export const useAppStore = <T>(selector: (store: StoreInterface) => T) => {
  const store = useContext(zustandContext);
  if (!store) throw new Error('Store is missing the provider');
  return useZustandStore(store, selector);
};

export const initializeStore = (preloadedState: any = {}) => {
  return createStore<StoreInterface>()(
    devtools(
      // persist(
      (set: any, get: any) => ({
        ...Object.assign(preloadedState, {
          coupons: {
            ...preloadedState.coupons,
            ...CouponSlice(set, get),
          },
          matches: {
            ...preloadedState.matches,
            ...MatchSlice(set, get),
          },
          players: {
            ...preloadedState.players,
            ...PlayerSlice(set, get),
          },
          slots: {
            ...preloadedState.slots,
            ...SlotSlice(set, get),
          },
        }),
      }),
    //   {
    //     name: 'app-store',
    //     storage: createJSONStorage(() => localStorage),
    //   }
    //   )
    )
  );
};
