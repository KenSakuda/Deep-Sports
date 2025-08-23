"use client";

import Link from "next/link";
import styles from "./index.module.css";

export default function RecruitBanner() {
  return (
    <Link href="/recruit" className={styles.wrap} aria-label="採用情報ページへ">
      <div className={styles.inner}>
        {/* 左側テキストブロック */}
        <div className={styles.texts}>
          <span className={styles.kicker}>RECRUIT</span>
          <h3 className={styles.title}>採用情報</h3>
          <p className={styles.desc}>
            Deep Sportsでは、一緒にメディアを作る仲間を募集しています。
          </p>
          <span className={styles.cta}>
            詳細を見る
            <span className={styles.chev} aria-hidden="true" />
          </span>
        </div>
        <div className={styles.visual} aria-hidden="true" />
      </div>
    </Link>
  );
}
