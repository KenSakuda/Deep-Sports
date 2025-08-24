// import { getArticleList } from "@/app/_libs/microcms";
// import ArticleList from "@/app/_components/ArticleList";
// import Pagination from "@/app/_components/Pagination";
// import { DETAIL_ARTICLE_LIST_LIMIT } from "@/app/_constants";
// import Sheet from "@/app/_components/Sheet";
// import styles from "./page.module.css";

// export default async function Page() {
//   const { contents: article, totalCount } = await getArticleList({
//     limit: DETAIL_ARTICLE_LIST_LIMIT,
//   });

//   return (
//     <div className={styles.container}>
//       <Sheet>
//         <h2 className={styles.sectionTitle}>記事一覧</h2>
//         <ArticleList article={article} />
//         <Pagination totalCount={totalCount} />
//       </Sheet>
//     </div>
//   );
// }

import { getArticleList } from "@/app/_libs/microcms";
import ArticleList from "@/app/_components/ArticleList";
import Pagination from "@/app/_components/Pagination";
import { DETAIL_ARTICLE_LIST_LIMIT } from "@/app/_constants";
import Layout from "@/app/_components/Layout";
import Main from "@/app/_components/Main";
import Sub from "@/app/_components/Sub";
import Ad from "@/app/_components/Ad";
import Ranking from "@/app/_components/Ranking";
import SearchField from "@/app/_components/SearchField";
// import Predict from "@/app/_components/Predict";
// import Stats from "@/app/_components/Stats";
import styles from "./page.module.css";
import ScrollToTop from "@/app/_components/ScrollToTop";

export default async function Page() {
  const { contents: articles, totalCount } = await getArticleList({
    limit: DETAIL_ARTICLE_LIST_LIMIT,
  });

  return (
    <Layout>
      <div className={styles.contentWrapper}>
        <Main className={styles.mainContent}>
          <h2 className={styles.sectionTitle}>記事一覧</h2>
          <ArticleList article={articles} />
          <Pagination totalCount={totalCount} />
        </Main>

        <Sub className={styles.sidebar}>
          <Ad />
          <Ranking />
          <SearchField />
          {/* <Predict /> */}
          {/* <Stats /> */}
          <Ad />
        </Sub>
      </div>
      <ScrollToTop />
    </Layout>
  );
}
