import { Match, IMatches } from '@/types/matches.type';

export const MatchSlice = (set: any, get: any): IMatches => ({
  matches: [
    {
      league: '',
      teams: ['LA Galaxy', 'New York City FC'],
      odds: {
        home_team: 0.0,
        away_team: 0.0,
        draw: 0.0,
      },
    },
  ],
  getMatches: () => get({ matches: { ...get().matches } }),
  updateMatches: (matches: Match[]) => {
    const matchObj = get().matches;
    let mergedMatch;
    for(const key in matchObj) {
      if(key === 'slots') mergedMatch = [...matches, ...matchObj[key]]
    }
    set({ slots: { ...matchObj, ...mergedMatch }});
  },
  deleteMatch: (match: Match) => set({ matches: { ...get().matches, match } }),
  createMatch: (Match: Match) =>
    set({ matches: { ...get().matches, ...Match }}),
});
