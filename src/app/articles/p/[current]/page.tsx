import Sheet from "@/app/_components/Sheet";
import { notFound } from "next/navigation";
import { getArticleList } from "@/app/_libs/microcms";
import ArticleList from "@/app/_components/ArticleList";
import Pagination from "@/app/_components/Pagination";
import { DETAIL_ARTICLE_LIST_LIMIT } from "@/app/_constants";
import styles from "./page.module.css";

type Props = {
  params: Promise<{
    current: string;
  }>;
};

export default async function Page({ params }: Props) {
  const resolvedParams = await params;

  const current = parseInt(resolvedParams.current, 10);

  if (Number.isNaN(current) || current < 1) {
    notFound();
  }

  const { contents: article, totalCount } = await getArticleList({
    limit: DETAIL_ARTICLE_LIST_LIMIT,
    offset: DETAIL_ARTICLE_LIST_LIMIT * (current - 1),
  });

  if (article.length === 0) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <Sheet>
        <h2 className={styles.sectionTitle}>記事一覧</h2>
        <ArticleList article={article} />
        <Pagination totalCount={totalCount} current={current} />
      </Sheet>
    </div>
  );
}
