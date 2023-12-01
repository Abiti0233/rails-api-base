'use client'

import Footer from "@/app/components/ui/footer";
import LoginHeader from "@/app/components/ui/loginHeader";
import { Router } from "next/router";


export default function Page() {
  return (
    <>
      <LoginHeader />
      自己紹介編集ページだよ
      <Footer />
    </>
  );
}