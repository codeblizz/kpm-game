// import { cache } from "react";
import { twMerge } from 'tailwind-merge';
import { clsx, type ClassValue } from 'clsx';
// import { QueryClient } from "@tanstack/query-core";

function cn(...args: ClassValue[]) {
  return twMerge(clsx(args));
}

// const getQueryClient = cache(() => new QueryClient());

export { cn };
