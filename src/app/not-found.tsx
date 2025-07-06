import styles from "./not-found.module.css";
import ButtonLink from "./_components/ButtonLink";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <dl>
        <dt className={styles.title}>ページが見つかりません</dt>
        <dd className={styles.text}>
          あなたがアクセスしようとしたページは存在しません。
          <br />
          URLを再度ご確認ください。
        </dd>
      </dl>
      <div className={styles.buttonLink}>
        <ButtonLink href="/">Return Home</ButtonLink>
      </div>
    </div>
  );
}
