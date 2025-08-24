"use client";

import Link from "next/link";
import styles from "./index.module.css";

type Props = {
  totalPages: number;
  currentPage: number; // 1-origin
  basePath: string; // 例: /articles/xxxx
};

export default function ArticlePager({
  totalPages,
  currentPage,
  basePath,
}: Props) {
  if (totalPages <= 1) return null;
  const makeHref = (p: number) =>
    p <= 1 ? `${basePath}` : `${basePath}?p=${p}`;
  return (
    <nav className={styles.pager} aria-label="記事ページャー">
      <div className={styles.inner}>
        <div className={styles.prevNext}>
          <Link
            href={makeHref(Math.max(1, currentPage - 1))}
            className={`${styles.navBtn} ${
              currentPage === 1 ? styles.disabled : ""
            }`}
            aria-disabled={currentPage === 1}
          >
            ← 前のページ
          </Link>
          <Link
            href={makeHref(Math.min(totalPages, currentPage + 1))}
            className={`${styles.navBtn} ${
              currentPage === totalPages ? styles.disabled : ""
            }`}
            aria-disabled={currentPage === totalPages}
          >
            次のページ →
          </Link>
        </div>
        <ul className={styles.dots} role="tablist">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <li key={p}>
              <Link
                role="tab"
                aria-selected={p === currentPage}
                href={makeHref(p)}
                className={`${styles.dot} ${
                  p === currentPage ? styles.active : ""
                }`}
              >
                {p}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
