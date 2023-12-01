import axios from "axios";
import type { NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authConfig: NextAuthConfig = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {label: "メールアドレス", type: "email"},
        password: {label: "パスワード", type: "password"},
      },
      async authorize(credentials) {
        const user = getUserData();
        const email = "user@nextemail.com";
        return credentials.email === email && credentials.password === "1234567891"
          ? { id: "userId", email }
          : null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        console.log("ログインしました！")
        return Response.redirect(new URL("/dashboard", nextUrl));
      }
      return true;
    },
  },
};

const getUserData = async () => {
  const url = "http://localhost:3000/api/v1/users";
    try {
      const response = await axios.get(url, {
        // headers: {
        //   // Authorization: `Bearer ${token}`
        // }
      });
      console.log(response)
      return response.data;
    } catch (error: any) {
        // console.log("AxiosError:", error.message);
      }
}
