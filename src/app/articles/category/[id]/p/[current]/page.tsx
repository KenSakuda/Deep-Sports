import { notFound } from "next/navigation";
import { getCategoryDetail, getArticleList } from "@/app/_libs/microcms";
import ArticleList from "@/app/_components/ArticleList";
import Pagination from "@/app/_components/Pagination";
import { DETAIL_ARTICLE_LIST_LIMIT } from "@/app/_constants";

type Props = {
  params: Promise<{
    id: string;
    current: string;
  }>;
};

export default async function Page({ params }: Props) {
  const resolvedParams = await params;

  const current = parseInt(resolvedParams.current, 10);

  if (Number.isNaN(current) || current < 1) {
    notFound();
  }

  const category = await getCategoryDetail(resolvedParams.id).catch(notFound);

  const newsPromise = getArticleList({
    filters: `category[equals]${category.id}`,
    limit: DETAIL_ARTICLE_LIST_LIMIT,
    offset: DETAIL_ARTICLE_LIST_LIMIT * (current - 1),
  });

  const { contents: article, totalCount } = await newsPromise.catch(() => ({
    contents: [],
    totalCount: 0,
  }));

  if (article.length === 0) {
    notFound();
  }

  return (
    <>
      <ArticleList article={article} />
      <Pagination
        totalCount={totalCount}
        current={current}
        basePath={`/articles/category/${category.id}`}
      />
    </>
  );
}
