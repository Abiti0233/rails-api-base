import Footer from '../app/components/ui/header';
import Header from '../app/components/ui/footer';
import Styles from '../app/styles/top/top.module.scss';

export default function Page() {
  return (
    <>
    <Header/>
    <div className="introduction">
      <div className={Styles.circle}>

      </div>
      <div className="introduction">
        <h1>自己紹介</h1>
        <p>ログインして、自己紹介文と画像を登録しましょう！</p>
      </div>
    </div>
    <Footer />
    </>
  );
}
