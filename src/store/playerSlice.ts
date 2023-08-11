import { IPlayer, Player } from '@/types/player.type';

export const PlayerSlice = (set: any, get: any): IPlayer => ({
  players: [
    {
      email: '',
      username: '',
      lastName: '',
      password: '',
      firstName: '',
    },
  ],
  createPlayer: (player: Player) =>
    set({ players: { ...get().players, player } }),
  deletePlayer: (player: Player) =>
    set({ players: { ...get().players, player } }),
});
