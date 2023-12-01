'use server'

import NextAuth from "next-auth";
import { authConfig } from "./app/auth.config";
import CredentialsProvider from "next-auth/providers/credentials";
import credentials from "next-auth/providers/credentials";

const login = async () => {
  try {
    const response = await fetch("https://localhost:3000/api/v1/users");
    const res = await response.json();
    return res;
    //APIからユーザー情報（メールアドレスとパスワードを取得するコードを記述する）
  } catch (err) {
    console.log(err);
    throw new Error("ログインに失敗しました。");
  }
};

export const { signIn, signOut, auth } = NextAuth(authConfig);
