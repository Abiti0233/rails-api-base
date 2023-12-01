'use client'

import Footer from "@/app/components/ui/footer";
import LoginHeader from "@/app/components/ui/loginHeader";
import { Router } from "next/router";


export default function Page() {
  return (
    <>
      <LoginHeader />
      スキル編集ページだよ
      <Footer />
    </>
  );
}