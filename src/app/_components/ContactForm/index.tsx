"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { createContactData } from "@/app/_actions/contact";
import ButtonLink from "../ButtonLink";
import { useActionState } from "react";
import styles from "./index.module.css";

const initialState = {
  status: "",
  message: "",
};

export default function ContactForm() {
  const [state, formAction] = useActionState(createContactData, initialState);
  console.log(state);

  const handleSubmit = () => {
    sendGAEvent({ event: "contact", value: "submit" });
  };

  if (state.status === "success") {
    return (
      <>
        <p className={styles.success}>
          お問い合わせいただき、ありがとうございます。
          <br />
          内容確認後、必要に応じてご返信いたします。
        </p>
        <div className={styles.buttonLink}>
          <ButtonLink href="/">Return Home</ButtonLink>
        </div>
      </>
    );
  }

  return (
    <form className={styles.form} action={formAction} onSubmit={handleSubmit}>
      <div className={styles.horizontal}>
        <div className={styles.item}>
          <label className={styles.label} htmlFor="lastname">
            性
          </label>
          <input
            className={styles.textfield}
            type="text"
            id="lastname"
            name="lastname"
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label} htmlFor="firstname">
            名
          </label>
          <input
            className={styles.textfield}
            type="text"
            id="firstname"
            name="firstname"
          />
        </div>
      </div>
      <div className={styles.item}>
        <label className={styles.label} htmlFor="email">
          メールアドレス
        </label>
        <input
          className={styles.textfield}
          type="text"
          id="email"
          name="email"
        />
      </div>
      <div className={styles.item}>
        <label className={styles.label} htmlFor="message">
          お問い合わせ内容
        </label>
        <textarea className={styles.textarea} id="message" name="message" />
      </div>
      <div className={styles.action}>
        {state.status === "error" && (
          <p className={styles.error}>{state.message}</p>
        )}
        <input type="submit" value="送信する" className={styles.button} />
      </div>
    </form>
  );
}
