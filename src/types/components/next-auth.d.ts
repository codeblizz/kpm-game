import React from 'react';
import NextAuth, { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session extends DefaultSession {
    user: {
      email?: string;
      username?: string;
      fullName?: string;
    };
    type?: string;
    expires: number;
    message?: string;
    accessToken: string;
    error: string | null;
  }
}
