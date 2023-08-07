import nc from 'next-connect';
import db from '@/data/db.json';
import { AxiosError, isAxiosError } from 'axios';
// import { EnumTypes } from '@/enums/type.enums';
// import axiosServer from '@/helpers/axios/server';
import type { NextApiRequest, NextApiResponse } from 'next';
import { AxiosErrorMessageType } from '@/types/axios.type';
import { UserDetails } from '@/pages/api/login';

const registerHandler = nc<NextApiRequest, NextApiResponse>();
// const url = `/api/v1/auth/${EnumTypes.REGISTER}`;

// For Game Task
registerHandler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  const userData: any = db as unknown as UserDetails[];
  try {
    const user = userData.filter(
      (user: UserDetails) => user.email === req.body.email
    );
    if (user) throw new Error('User Already Exist');
    //For security - It's important to hash password before saving
    // but this is a test case nothing was saved after registration
    return res.send({ message: 'Registration Successful', statusCode: 200 });
  } catch (err: unknown) {
    const error = err as AxiosError;
    if (isAxiosError<AxiosErrorMessageType>(error) && error.response) {
      return res.send({
        statusCode: error.response?.status,
        message: error.response?.data?.name,
      });
    }
  }
});

// For production
// registerHandler.post(async (req: NextApiRequest, res: NextApiResponse) => {
//   try {
//     const result = await axiosServer.post(url, { ...req.body });
//     return res.send(result.data);
//   } catch (err: unknown) {
//     const error = err as AxiosError;
//     if (isAxiosError<AxiosErrorMessageType>(error) && error.response) {
//       return res.send({
//         statusCode: error.response?.status,
//         message: error.response?.data?.name,
//       });
//     }
//   }
// });

export default registerHandler;
