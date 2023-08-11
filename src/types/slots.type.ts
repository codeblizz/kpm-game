import { Collections, Devices } from "@/enums/type.enums";

export type Slots = {
  id: number;
  title: string;
  provider: string;
  play_url: string;
  identifier: string;
  devices: Devices[];
  collections: Collections[];
};

export interface ISlotData {
  data: { 
    slots: Slots[],
  }
}

export interface ISlots {
  slots: Slots[];
  getSlots: () => void;
  createSlot: (slot: Slots) => void;
  deleteSlot: (slot: Slots) => void;
  setSlots: (slots: Slots[]) => void;
  updateSlots: (slots: Slots[]) => void;
}
