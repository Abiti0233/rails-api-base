"use client";

import { Bar } from "react-chartjs-2";
import Footer from "../components/ui/footer";
import LoginHeader from "../components/ui/loginHeader";
import Styles from "../styles/dashboard/dashboard.module.scss";
import { data, options } from "../components/features/top/skillChart";
import Button from "../components/ui/buttons/button";
import { useRouter } from "next/navigation";
import DropdownList from "../components/features/dashboard/DropdownList";

export default function Page() {
  const router = useRouter();
  const profileEdit = () => {
    router.push("/dashboard/profileEdit");
  };
  const skillEdit = () => {
    router.push("/dashboard/skillEdit");
  };
  return (
    <div>
      <LoginHeader />
      <div className={Styles.top}>
        <div className={Styles.profile}>
          <div className={Styles.circle}>
            この中には画像が入るよ！！🎉グレーのところが画像に変わるよ！！🙆🏻‍♂️
          </div>
          <div className="introduction">
            <div className={Styles.titleDiv}>
              <h1 className={Styles.profileTitle}>自己紹介</h1>
            </div>
            <p className={Styles.sampleFont}>
              この中にはDBからとってきたintroductionが入るよ！！🙋🏻‍♂️
            </p>
            <Button
              css={Styles.button}
              value="自己紹介を編集する"
              onClick={profileEdit}
            />
          </div>
        </div>
        <div className={Styles.skills}>
          <div className={Styles.skillDiv}>
            <div className={Styles.skillTitleDiv}>
              <h1 className={Styles.skillTitle}>スキルチャート</h1>
              <Button
                css={Styles.button}
                value="スキルを編集する"
                onClick={skillEdit}
              />
              <div>
                <DropdownList />
              </div>
            </div>
            <Bar className={Styles.skillChart} data={data} options={options} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
