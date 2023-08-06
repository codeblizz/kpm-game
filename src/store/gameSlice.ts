import { Collections, Devices } from "@/enums/type.enums";

type GameType = {
  id: number;
  title: string;
  provider: string;
  play_url: string;
  identifier: string;
  devices: Devices[];
  collections: Collections[];
};

export interface IGames {
  games: GameType[];
  addGame: (game: GameType) => void;
  deleteGame: (game: GameType) => void;
}

export const GameSlice = (set: any, get: any) => ({
  games: [{
    id: 0,
    title: '',
    provider: '',
    play_url: '',
    identifier: '',
    devices: [Devices.DESKTOP],
    collections: [Collections.HD],
  }],
  addGame: (game: GameType) =>
    set({ game: { ...get().games, game }}),
  deleteGame: (game: GameType) =>
    set({ game: { ...get().games, game }}),
});
