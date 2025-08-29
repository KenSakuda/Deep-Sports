"use client";

import Link from "next/link";
import styles from "./index.module.css";

export default function GlossaryBanner() {
  return (
    <Link href="/glossary" className={styles.wrap} aria-label="用語集ページへ">
      <div className={styles.inner}>
        {/* 左：ビジュアル（装飾のみ） */}
        <div className={styles.visual} aria-hidden="true">
          <span className={styles.ribbon} />
          <div className={styles.tabs} aria-hidden="true">
            <span>A</span>
            <span>B</span>
            <span>C</span>
          </div>
          <span className={styles.glyph} aria-hidden="true">
            Aa
          </span>
        </div>

        {/* 右：テキスト */}
        <div className={styles.texts}>
          <h3 className={styles.title}>用語集</h3>
          <p className={styles.desc}>
            スポーツを通じて、統計学や経済学の専門用語をやさしく学習！
          </p>
          <span className={styles.cta}>
            用語を検索
            <span className={styles.chev} aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  );
}
