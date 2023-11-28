'use server'

import { signOut } from 'next-auth/react';

export const handleSignOut = async (e?: React.MouseEvent<HTMLButtonElement>) => {
  e?.preventDefault();
  await signOut({ callbackUrl: '/login' });
}