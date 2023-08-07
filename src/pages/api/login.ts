import nc from 'next-connect';
import { SignJWT } from 'jose';
import db from '@/data/db.json';
import { AxiosError, isAxiosError } from 'axios';
import { EnumTypes } from '@/enums/type.enums';
import axiosServer from '@/helpers/axios/server';
import { AxiosErrorMessageType } from '@/types/axios.type';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getProxyToken } from '@/helpers/lib';

const loginHandler = nc<NextApiRequest, NextApiResponse>();
// const url = `/api/v1/auth/${EnumTypes.LOGIN}`;

export type UserDetails = {
  email: string;
  password: string;
  fullName: string;
};

// For Game Task - Using a proxy DB data
loginHandler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  const userData: any = db as unknown as UserDetails[];
  try {
    const user = userData.filter(
      (data: UserDetails) => data.email === req.body.email
    );
    if (!user.length) throw new Error('Login Failed, user not found');
    //For security - Verify and compare password with DB before granting login access
    //Then generate and Send token access to FE
    const token = await getProxyToken({ email: user.email });
    const authUser = user[0];
    return res.send({
      message: 'Login Successful',
      statusCode: 200,
      accessToken: token,
      user: {
        email: authUser.email,
        fullName: authUser.fullName,
      },
    });
  } catch (err: any) {
    return res.send({
      statusCode: 404,
      message: err?.message,
    });
  }
});

// For Production: Call to backend server
// loginHandler.post(async (req: NextApiRequest, res: NextApiResponse) => {
// try {
// const result = await axiosServer.post(url, { ...req.body });
// return res.send(result.data)
// } catch (err: unknown) {
//   const error = err as AxiosError;
//   if (isAxiosError<AxiosErrorMessageType>(error) && error.response) {
//     return res.send({
//       statusCode: error.response?.status,
//       message: error.response?.data?.name,
//     });
//   }
// })

export default loginHandler;
