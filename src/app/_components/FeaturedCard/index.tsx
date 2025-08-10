import Link from "next/link";
import Image from "next/image";
import { Article } from "@/app/_libs/microcms";
import Category from "@/app/_components/Category";
import Date from "@/app/_components/Date";
import styles from "./index.module.css";

type Props = {
  article: Article;
};

export default function FeaturedCard({ article }: Props) {
  return (
    <Link href={`/articles/${article.id}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={article.thumbnail.url}
          alt={article.title}
          width={800}
          height={450}
          className={styles.image}
        />
        <div className={styles.overlay}>
          <div className={styles.title}>{article.title}</div>
          <div className={styles.meta}>
            <div className={styles.footer}>
              <Category category={article.category} />
              <Date date={article.date} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
