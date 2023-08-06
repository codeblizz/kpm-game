export type PlayerType = {
  email: string;
  username: string;
  lastName: string;
  password: string;
  firstName: string;
}

export interface IPlayer {
  players: PlayerType[];
  createUser: (player: PlayerType) => void;
  deleteUser: (player: PlayerType) => void;
}

export const PlayerSlice = (set: any, get: any): IPlayer => ({
  players: [{
    email: '',
    username: '',
    lastName: '',
    password: '',
    firstName: '',
  }],
  createUser: (player: PlayerType) => set({ players: { ...get().players, player }}),
  deleteUser: (player: PlayerType) => set({ players: { ...get().players, player }}),
});
