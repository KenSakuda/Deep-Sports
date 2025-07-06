// import { getCategoryDetail, getArticleList } from "@/app/_libs/microcms";
// import { notFound } from "next/navigation";
// import Layout from "@/app/_components/Layout";
// import Main from "@/app/_components/Main";
// import Sub from "@/app/_components/Sub";
// import Ad from "@/app/_components/Ad";
// import Ranking from "@/app/_components/Ranking";
// import SearchField from "@/app/_components/SearchField";
// import Predict from "@/app/_components/Predict";
// import Stats from "@/app/_components/Stats";
// import ArticleList from "@/app/_components/ArticleList";
// import Pagination from "@/app/_components/Pagination";
// import Category from "@/app/_components/Category";
// import ScrollToTop from "@/app/_components/ScrollToTop";
// import styles from "./page.module.css";
// import { DETAIL_ARTICLE_LIST_LIMIT } from "@/app/_constants";

// type Props = {
//   params: {
//     id: string;
//   };
// };

// export const revalidate = 60;

// export default async function Page({ params }: Props) {
//   const category = await getCategoryDetail(params.id).catch(notFound);
//   const { contents: articles, totalCount } = await getArticleList({
//     limit: DETAIL_ARTICLE_LIST_LIMIT,
//     filters: `category[equals]${category.id}`,
//   });

//   return (
//     <Layout>
//       <div className={styles.contentWrapper}>
//         <Main className={styles.mainContent}>
//           <h1 className={styles.title}>
//             <Category category={category} />
//             の記事一覧
//           </h1>
//           <ArticleList article={articles} />
//           <Pagination
//             totalCount={totalCount}
//             basePath={`/articles/category/${category.id}`}
//           />
//         </Main>
//         <Sub className={styles.sidebar}>
//           <Ad />
//           <Ranking />
//           <SearchField />
//           <Predict />
//           <Stats />
//           <Ad />
//         </Sub>
//       </div>
//       <ScrollToTop />
//     </Layout>
//   );
// }

import { getCategoryDetail, getArticleList } from "@/app/_libs/microcms";
import { notFound } from "next/navigation";
import ArticleList from "@/app/_components/ArticleList";
import Pagination from "@/app/_components/Pagination";
// import Category from "@/app/_components/Category";
import { DETAIL_ARTICLE_LIST_LIMIT } from "@/app/_constants";
import Layout from "@/app/_components/Layout";
import Main from "@/app/_components/Main";
import Sub from "@/app/_components/Sub";
import Ad from "@/app/_components/Ad";
import Ranking from "@/app/_components/Ranking";
import SearchField from "@/app/_components/SearchField";
import Predict from "@/app/_components/Predict";
// import Stats from "@/app/_components/Stats";
import styles from "./page.module.css";
import ScrollToTop from "@/app/_components/ScrollToTop";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page({ params }: Props) {
  const resolvedParams = await params;
  const category = await getCategoryDetail(resolvedParams.id).catch(notFound);
  const { contents: articles, totalCount } = await getArticleList({
    limit: DETAIL_ARTICLE_LIST_LIMIT,
    filters: `category[equals]${category.id}`,
  });

  // 1記事目（最新記事）と残りの記事に分割
  const [latestArticle, ...otherArticles] = articles;

  return (
    <Layout>
      <div className={styles.contentWrapper}>
        <Main className={styles.mainContent}>
          <div className={styles.categoryHeader}>
            <h2 className={styles.categoryName}>{category.name}</h2>
            <span className={styles.articlesLabel}>の記事一覧</span>
          </div>

          {latestArticle && (
            <div className={styles.latestArticle}>
              <ArticleList article={[latestArticle]} isLarge />
            </div>
          )}

          {otherArticles.length > 0 && (
            <div className={styles.articleGrid}>
              <ArticleList article={otherArticles} />
            </div>
          )}

          <Pagination
            totalCount={totalCount}
            basePath={`/articles/category/${category.id}`}
          />
        </Main>

        <Sub className={styles.sidebar}>
          <Ad />
          <Ranking />
          <SearchField />
          <Predict />
          {/* <Stats /> */}
          <Ad />
        </Sub>
      </div>
      <ScrollToTop />
    </Layout>
  );
}
