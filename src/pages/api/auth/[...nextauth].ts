import NextAuth from 'next-auth';
import type { NextAuthOptions } from 'next-auth';
import LoginService from '@/services/login.service';
import credentialsProvider from 'next-auth/providers/credentials';

type credentialType = {
  email: string;
  password: string;
  csrfToken: string;
  callbackUrl: string;
  json: string | boolean;
  redirect: string | boolean;
};

export const authOptions: NextAuthOptions = {
  providers: [
    credentialsProvider({
      id: 'credentials',
      name: 'credentials',
      type: 'credentials',
      credentials: {},
      async authorize(credentials, req) {
        let res: any;
        const { email, password } = credentials as credentialType;
        try {
          if (credentials) {
            res = await LoginService.login({ email, password });
          }
          const user = res.data;
          if (user.statusCode !== 200) throw new Error(user.message);
          if (res.status === 200 && user.statusCode === 200) {
            return { ...res.data };
          }
          return null;
        } catch (error: any) {
          throw new Error(error.message ?? error.response.data.message);
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
    signOut: '/login',
    error: '/error',
  },
  jwt: {
    maxAge: 3600,
  },
  session: {
    strategy: 'jwt',
    maxAge: 3600,
  },
  callbacks: {
    async jwt({ token, user, profile, account }: any) {
      if (user && token) {
        return Promise.resolve({
          ...token,
          ...user,
          ...account,
          ...profile,
        });
      }

      return Promise.resolve(token);
    },
    async session({ session, token }: any) {
      if (token === null) return (session.token = '');
      session.id = token.jti;
      session.user = token.user;
      session.type = token.type;
      session.error = token.error;
      session.expires = token.exp;
      session.status =
        Math.floor(Date.now() / 1000) > token.exp
          ? 'unauthenticated'
          : 'authenticated';
      session.provider = token.provider;
      session.accessToken = token.accessToken;

      return Promise.resolve(session);
    },
  },
  theme: {
    brandColor: '', // Hex color code #33FF5D
    logo: '/logo.png', // Absolute URL to image
    colorScheme: 'auto', // "auto" | "dark" | "light"
  },
  debug: process.env.NODE_ENV === 'development',
};

export default NextAuth(authOptions);
