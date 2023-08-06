type SlotsType = {
  league: string;
  teams: string[];
  odds: {
    home_team: number;
    away_team: number;
    draw: number;
  };
};

export interface ISlots {
  slots: SlotsType[];
  createSlot: (slot: SlotsType) => void;
  deleteSlot: (slot: SlotsType) => void;
}

export const SlotSlice = (set: any, get: any): ISlots => ({
  slots: [{
    league: '',
    teams: ["LA Galaxy", "New York City FC"],
    odds: {
      home_team: 0.0,
      away_team: 0.0,
      draw: 0.0,
    }
  }],
  createSlot: (slot: SlotsType) =>
    set({ slots: { ...get().slots, slot } }),
  deleteSlot: (slot: SlotsType) =>
    set({ slots: { ...get().slots, slot } }),
});
