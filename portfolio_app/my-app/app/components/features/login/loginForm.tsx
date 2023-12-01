"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { authenticate } from "../../../login/action";
import { useFormState, useFormStatus } from "react-dom";
import Styles from "../../../styles/components/login/loginForm.module.scss";

type Inputs = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => {
    authenticate(data);

    console.log(data);

    return "ほげ";
  };

  const email = watch("email");

  // const [state, formAction] = useFormState(authenticate, true);
  return (
    <div>
      <h1 className={Styles.loginTitle}>ログイン</h1>
      <div className={Styles.loginForm}>
        <form onSubmit={handleSubmit(onSubmit)} className={Styles.form}>
          <div className={Styles.inputContent}>
            <label className={Styles.label}>
              <span>メールアドレス</span>
              <input
                className={Styles.input}
                {...register("email", {
                  required: "メールアドレスを入力してください。",
                  pattern: {
                    value:
                      /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
                    message: "メールアドレスを正しく入力してください。",
                  },
                })}
              />
            </label>
            {errors.email?.message && (
              <p className={Styles.error}>{errors.email?.message}</p>
            )}
          </div>
          <label className={Styles.label}>
            <span>パスワード</span>
            <input
              type="password"
              className={Styles.input}
              {...register("password", {
                required: "パスワードを入力してください。",
                minLength: {
                  value: 10,
                  message: "10文字以上で入力してください。",
                },
              })}
            />
          </label>
          {errors.password?.message && (
            <p className={Styles.error}>{errors.password?.message}</p>
          )}
          <SubmitButton css={Styles.loginButton} />
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
    <button aria-disabled={pending} className={css} type="submit">
      {pending ? "ログイン中" : "ログインする"}
    </button>
  );
}
