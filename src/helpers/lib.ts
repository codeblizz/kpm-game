import { cache } from 'react';
import { twMerge } from 'tailwind-merge';
import { SignJWT, decodeJwt } from 'jose';
import { clsx, type ClassValue } from 'clsx';
import { QueryClient } from '@tanstack/query-core';

// export const getQueryClient = cache(() => new QueryClient());

function cn(...args: ClassValue[]) {
  return twMerge(clsx(args));
}

function checkIfTokenExpired(token: string) {
  const expiresAt = decodeJwt(token).exp as number;
  const dateNow = Math.floor(Date.now() / 1000);
  if (dateNow > expiresAt) return true;
  return false;
}

async function getProxyToken({ tokenBody }: any) {
  return await new SignJWT({
    ...tokenBody,
    exp: Math.floor(Date.now() / 1000) + 60 * 60,
  })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('1h')
    .sign(new TextEncoder().encode(process.env.GAME_SECRET_KEY));
}

export { cn, getProxyToken, checkIfTokenExpired };
