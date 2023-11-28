"use client";

import Footer from "../components/ui/footer";
import Header from "../components/ui/header";
import LoginHeader from "../components/ui/loginHeader";
import Styles from "../styles/top/top.module.scss";
import { useEffect, useRef } from "react";
import { Bar } from "react-chartjs-2";
import { data, options } from "../components/features/top/skillChart";

export default function Page() {
  return (
    <>
      <Header />
      <div className={Styles.top}>
        <div className={Styles.profile}>
          <div className={Styles.circle}></div>
          <div className="introduction">
            <div className={Styles.titleDiv}>
              <h1 className={Styles.profileTitle}>自己紹介</h1>
            </div>
            <p className={Styles.sampleFont}>
              ログインして、自己紹介文と画像を登録しましょう！
            </p>
          </div>
        </div>
        <div className={Styles.skills}>
          <div className={Styles.skillDiv}>
            <div className={Styles.skillTitleDiv}>
              <h1 className={Styles.skillTitle}>スキルチャート</h1>
            </div>
            <Bar className={Styles.skillChart} data={data} options={options} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
