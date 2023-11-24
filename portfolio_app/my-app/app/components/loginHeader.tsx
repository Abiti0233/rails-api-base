import Link from "next/link";
import React from "react";
import Styles from "../styles/components/header.module.scss";

export default function LoginHeader() {
  return (
    <header className={Styles.header}>
      <div className={Styles.list}>
        <div className="header-logo">
          <Link className={Styles.logo} href="#">
            My Portfolio
          </Link>
        </div>
        <div className={Styles.left}>
          <Link className={Styles.loginLink} href="#">プロフィール編集</Link>
          <Link className={Styles.loginLink} href="#">スキル編集</Link>
          <button className={Styles.button}>ログイン</button>
        </div>
      </div>
    </header>
  );
}
