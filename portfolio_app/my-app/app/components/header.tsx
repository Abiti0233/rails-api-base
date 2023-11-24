import Link from "next/link";
import React from "react";
import Styles from "../styles/components/header.module.scss";

export default function Header() {
  return (
    <header className={Styles.header}>
      <div className={Styles.list}>
        <div className="header-logo">
          <Link className={Styles.logo} href="#">
            My Portfolio
          </Link>
        </div>
        <div className="header-left">
          <button className={Styles.button}>ログイン</button>
        </div>
      </div>
    </header>
  );
}
