'use client'

import Link from "next/link";
import React from "react";
import Styles from "../../styles/components/loginHeader.module.scss";
import { signOut } from "../../../auth";
import LogoutButton from "./buttons/logoutButton";

export default function LoginHeader() {
  const handleSignOut = async (e?: React.MouseEvent<HTMLButtonElement>) => {
    e?.preventDefault();
    await signOut();
  };

  return (
    <header className={Styles.header}>
      <div className={Styles.list}>
        <div className="header-logo">
          <Link className={Styles.logo} href="/dashboard">
            My Portfolio
          </Link>
        </div>
        <div className={Styles.left}>
          <Link className={Styles.loginLink} href="/dashboard/profileEdit">
            プロフィール編集
          </Link>
          <Link className={Styles.loginLink} href="/dashboard/skillEdit">
            スキル編集
          </Link>
          <form action={async () => {
            // 'use server'
            await signOut()
          }}
          >
            <button className={Styles.button}>ログアウト</button>
          </form>
        </div>
      </div>
    </header>
  );
}
