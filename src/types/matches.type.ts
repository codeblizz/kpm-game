
export type Match = {
  league: string;
  teams: string[];
  odds: {
    home_team: number;
    away_team: number;
    draw: number;
  };
};

export interface IMatchData {
  data: { 
    matches: Match[]
  }
}

export interface IMatches {
  matches: Match[];
  getMatches: () => void;
  updateMatches: (match: Match[]) => void;
  deleteMatch: (match: Match) => void;
  createMatch: (matches: Match) => void;
}
