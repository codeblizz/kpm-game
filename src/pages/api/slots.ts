import nc from 'next-connect';
import db from '@/data/games-list.json';
import { Slots } from '@/types/slots.type';
import type { NextApiRequest, NextApiResponse } from 'next';

const slotHandler = nc<NextApiRequest, NextApiResponse>();

// Get Game Slots
slotHandler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const slotData: any = db as unknown as Slots[];
  try {
    const slots = slotData.map((slot: Slots) => slot);
    if (!slots.length) throw new Error('No Slots Found');
    return res.send({ message: 'Data Successful', statusCode: 200, slots });
  } catch (err: any) {
    return res.send({
      statusCode: 404,
      message: err?.message,
    });
  }
});

export default slotHandler;
