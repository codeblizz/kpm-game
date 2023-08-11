import nc from 'next-connect';
import db from '@/data/match-list.json';
import { Match } from '@/types/matches.type';
import type { NextApiRequest, NextApiResponse } from 'next';

const matchHandler = nc<NextApiRequest, NextApiResponse>();

// Get Game Matches
matchHandler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const matchData: any = db as unknown as Match[];
  try {
    const matches = matchData.matches.map((match: Match) => match);
    if (!matches.length) throw new Error('No Matches Found');
    return res.send({
      message: 'Data Successful',
      statusCode: 200,
      matches,
    });
  } catch (err: any) {
    return res.send({
      statusCode: 404,
      message: err?.message,
    });
  }
});

export default matchHandler;
