import { Metadata } from "next";
import Layout from "@/app/_components/Layout";
import Main from "@/app/_components/Main";
import Sub from "@/app/_components/Sub";
import Ad from "@/app/_components/Ad";
import { DETAIL_ARTICLE_LIST_LIMIT } from "@/app/_constants";
import { getArticleList } from "@/app/_libs/microcms";
// import Pickup from "@/app/_components/Pickup";
import Ranking from "@/app/_components/Ranking";
import Predict from "@/app/_components/Predict";
// import Stats from "@/app/_components/Stats";
import SearchField from "@/app/_components/SearchField";
import Cards from "@/app/_components/Cards";
// import { ReadMore } from "@/app/_components/ReadMore";
import ScrollToTop from "@/app/_components/ScrollToTop";
import styles from "./page.module.css";

// type Props = {
//   searchParams: {
//     q?: string;
//   };
// };

type Props = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export const revalidate = 60;

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  return {
    title: `「${resolvedSearchParams.q}」の検索結果`,
  };
}

export default async function Page({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams;

  const q = resolvedSearchParams.q;
  const data = await getArticleList({
    limit: DETAIL_ARTICLE_LIST_LIMIT,
    q,
  });
  return (
    <Layout>
      <div className={styles.contentWrapper}>
        <Main className={styles.mainContent}>
          <h1 className={styles.title}>
            「{resolvedSearchParams.q}」にヒットした記事一覧
          </h1>
          <p>{data.totalCount}件が見つかりました</p>
          <Cards articles={data.contents} />
          {/* <ReadMore totalCount={data.totalCount} q={q} /> */}
        </Main>
        <Sub className={styles.sidebar}>
          <Ad />
          <Ranking />
          <SearchField />
          <Predict />
          <Ad />
          {/* <Stats /> */}
        </Sub>
      </div>
      <ScrollToTop />
    </Layout>
  );
}
