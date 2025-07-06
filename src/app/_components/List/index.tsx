import Link from "next/link";
import Image from "next/image";
import { Article } from "@/app/_libs/microcms";
import styles from "./index.module.css";

type Props = {
  article: Article;
};

export default function List({ article }: Props) {
  return (
    <Link href={`/articles/${article.id}`} className={styles.list}>
      <Image
        src={article.thumbnail.url}
        alt=""
        width={100}
        height={75}
        className={styles.image}
      />
      <div className={styles.title}>{article.title}</div>
    </Link>
  );
}
