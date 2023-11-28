"use client";

import { authenticate } from "../../../login/action";
import { useFormState, useFormStatus } from "react-dom";
import Styles from "../../../styles/components/login/loginForm.module.scss";

export default function LoginForm() {
  const [state, formAction] = useFormState(authenticate, true);
  return (
    <div>
      <h1 className={Styles.loginTitle}>ログイン</h1>
      <div className={Styles.loginForm}>
        <form action={formAction} className={Styles.form}>
          <label className={Styles.label}>メールアドレス</label>
          <input type="email" name="email" className={Styles.input}/>
          <label className={Styles.label}>パスワード</label>
          <input type="password" name="password" className={Styles.input}/>
          <SubmitButton css={Styles.loginButton}/>
        </form>
      </div>
    </div>
  );
}

type Props = {
  css: string;
};

function SubmitButton({ css }: Props) {
  const { pending } = useFormStatus();
  return (
    <button aria-disabled={pending} className={css}>
      {pending ? "ログイン中" : "ログインする"}
    </button>
  );
}
