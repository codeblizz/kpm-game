export type Player = {
  email: string;
  username: string;
  lastName: string;
  password: string;
  firstName: string;
};

export interface IPlayer {
  players: Player[];
  createPlayer: (player: Player) => void;
  deletePlayer: (player: Player) => void;
}
