import { ISlots, Slots } from '@/types/slots.type';
import { Collections, Devices } from '@/enums/type.enums';

export const SlotSlice = (set: any, get: any): ISlots => ({
  slots: [
    {
      id: 0,
      title: '',
      provider: '',
      play_url: '',
      identifier: '',
      devices: [Devices.DESKTOP],
      collections: [Collections.HD],
    },
  ],
  getSlots: () => get({ slots: { ...get().slots } }),
  updateSlots: (slots: Slots[]) => {
    const slotObj = get().slots;
    let mergedSlots;
    for(const key in slotObj) {
      if(key === 'slots') mergedSlots = [...slots, ...slotObj[key]]
    }
    set({ slots: { ...slotObj, ...mergedSlots }});
  },
  createSlot: (slot: Slots) => set({ slots: { ...get().slots, ...slot }}),
  setSlots: (slots: Slots[]) => set({ slots: { ...get().slots, ...slots }}, false, 'setSlots'),
  deleteSlot: (slot: Slots) => set({ slots: { ...get().slots.filter((s:Slots) => s.id !== slot.id)}}),
});
