'use client'

import Link from "next/link";
import React from "react";
import Styles from "../../styles/components/header.module.scss";
import Button from "./buttons/button";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const onClick = () => {
    router.push("/login");
  };
  return (
    <header className={Styles.header}>
      <div className={Styles.list}>
        <div className="header-logo">
          <Link className={Styles.logo} href="/top">
            My Portfolio
          </Link>
        </div>
        <div className="header-left">
          <Button onClick={onClick} value="ログイン" css={Styles.button} />
        </div>
      </div>
    </header>
  );
}
