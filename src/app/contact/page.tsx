import ContactForm from "@/app/_components/ContactForm";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>お問い合わせ</h1>
      <div className={styles.titleSeparator}></div>
      <p className={styles.text}>
        当ニュースサイトに関するご意見・ご感想は、以下のフォームよりご連絡ください。
      </p>
      <ContactForm />
    </div>
  );
}
