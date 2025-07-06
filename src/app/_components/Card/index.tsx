import Link from "next/link";
import Image from "next/image";
import { Article } from "@/app/_libs/microcms";
import Category from "@/app/_components/Category";
import Date from "@/app/_components/Date";
import styles from "./index.module.css";

type Props = {
  article: Article;
};
const MAX_TITLE_LENGTH = 41; // タイトルの最大文字数
const MAX_DESCRIPTION_LENGTH = 100; // 概要の最大文字数

export default function Card({ article }: Props) {
  const truncatedTitle =
    article.title.length > MAX_TITLE_LENGTH
      ? article.title.slice(0, MAX_TITLE_LENGTH) + "..."
      : article.title;

  const truncatedDescription =
    article.description && article.description.length > MAX_DESCRIPTION_LENGTH
      ? article.description.slice(0, MAX_DESCRIPTION_LENGTH) + "..."
      : article.description;

  return (
    <Link href={`/articles/${article.id}`} className={styles.card}>
      <Image
        src={article.thumbnail.url}
        alt=""
        width={1200}
        height={630}
        className={styles.image}
      />
      <div className={styles.content}>
        <dl>
          <dt className={styles.title}>{truncatedTitle}</dt>
          <dd className={styles.meta}>
            <Category category={article.category} />
            <Date date={article.date} />
          </dd>
          <dd className={styles.description}>{truncatedDescription}</dd>
        </dl>
      </div>
    </Link>
  );
}
