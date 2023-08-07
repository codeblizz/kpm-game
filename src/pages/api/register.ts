import nc from 'next-connect';
import db from '@/data/db.json';
import type { NextApiRequest, NextApiResponse } from 'next';
import { UserDetails } from '@/pages/api/login';

const registerHandler = nc<NextApiRequest, NextApiResponse>();

// Post New User
registerHandler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  const userData: any = db as unknown as UserDetails[];
  try {
    const user = userData.filter(
      (user: UserDetails) => user.email === req.body.email
    );
    if (user.length) throw new Error('User Already Exist');
    //For security - It's important to hash password before saving
    // but this is a test case nothing was saved after registration
    return res.send({ message: 'Registration Successful', statusCode: 200 });
  } catch (err: any) {
    return res.send({
      statusCode: 404,
      message: err?.message,
    });
}});

export default registerHandler;
