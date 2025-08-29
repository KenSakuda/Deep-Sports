// import styles from "./page.module.css";
// import Layout from "./_components/Layout";
// import Main from "./_components/Main";
// import Sub from "./_components/Sub";
// import Ad from "./_components/Ad";
// import { TOP_ARTICLE_LIST_LIMIT } from "@/app/_constants";
// import { getArticleList } from "@/app/_libs/microcms";
// import Cards from "./_components/Cards";
// import Ranking from "./_components/Ranking";
// import SearchField from "./_components/SearchField";
// import ButtonLink from "./_components/ButtonLink";
// import Predict from "./_components/Predict";
// // import Stats from "./_components/Stats";
// import ScrollToTop from "./_components/ScrollToTop";
// import Slider from "./_components/Slider";

// export const revalidate = 60;

// type Props = {
//   searchParams: Promise<{
//     rankingDraftKey?: string;
//     // pickupDraftKey?: string;
//   }>;
// };

// export default async function Page({ searchParams }: Props) {
//   const resolvedsearchParams = await searchParams;
//   const data = await getArticleList({
//     limit: TOP_ARTICLE_LIST_LIMIT,
//   });

//   return (
//     <Layout>
//       <div className={styles.sliderWrapper}>
//         <Slider articles={data.contents} />
//       </div>
//       <div className={styles.container}>
//         <Main className={styles.mainContent}>
//           <h1 className={styles.sectionTitle}>スポーツアナリティクス</h1>
//           <div className={styles.cards}>
//             <Cards articles={data.contents} />
//           </div>
//           <div className={styles.buttonLink}>
//             <ButtonLink href="/articles">Read More</ButtonLink>
//           </div>
//         </Main>
//         <Sub className={styles.sidebar}>
//           <Ad />
//           <Ranking draftKey={resolvedsearchParams.rankingDraftKey} />
//           <Ad />
//           <Predict />
//           <SearchField />
//           <Ad />
//           {/* <Stats /> */}
//         </Sub>
//       </div>
//       <ScrollToTop />
//     </Layout>
//   );
// }

// import styles from "./page.module.css";
// import Layout from "./_components/Layout";
// import Main from "./_components/Main";
// import Sub from "./_components/Sub";
// import Ad from "./_components/Ad";
// import { TOP_ARTICLE_LIST_LIMIT } from "@/app/_constants";
// import { getArticleList } from "@/app/_libs/microcms";
// import Cards from "./_components/Cards";
// import Ranking from "./_components/Ranking";
// import SearchField from "./_components/SearchField";
// import ButtonLink from "./_components/ButtonLink";
// import Predict from "./_components/Predict";
// import ScrollToTop from "./_components/ScrollToTop";

// export const revalidate = 60;

// type Props = {
//   searchParams: Promise<{
//     rankingDraftKey?: string;
//   }>;
// };

// export default async function Page({ searchParams }: Props) {
//   const resolvedsearchParams = await searchParams;
//   const data = await getArticleList({
//     limit: TOP_ARTICLE_LIST_LIMIT,
//   });

//   return (
//     <Layout>
//       <div className={styles.container}>
//         <Main className={styles.mainContent}>
//           <h1 className={styles.sectionTitle}>スポーツアナリティクス</h1>
//           <div className={styles.cards}>
//             <Cards articles={data.contents} />
//           </div>
//           <div className={styles.buttonLink}>
//             <ButtonLink href="/articles">Read More</ButtonLink>
//           </div>
//         </Main>
//         <Sub className={styles.sidebar}>
//           <Ad />
//           <Ranking draftKey={resolvedsearchParams.rankingDraftKey} />
//           <Ad />
//           <Predict />
//           <SearchField />
//           <Ad />
//         </Sub>
//       </div>
//       <ScrollToTop />
//     </Layout>
//   );
// }

// import styles from "./page.module.css";
// import Layout from "./_components/Layout";
// import Main from "./_components/Main";
// import Sub from "./_components/Sub";
// import Ad from "./_components/Ad";
// import { TOP_ARTICLE_LIST_LIMIT } from "@/app/_constants";
// import { getArticleList } from "@/app/_libs/microcms";
// import Cards from "./_components/Cards";
// import Ranking from "./_components/Ranking";
// import SearchField from "./_components/SearchField";
// import ButtonLink from "./_components/ButtonLink";
// import Predict from "./_components/Predict";
// import ScrollToTop from "./_components/ScrollToTop";

// export const revalidate = 60;

// type Props = {
//   searchParams: Promise<{
//     rankingDraftKey?: string;
//   }>;
// };

// export default async function Page({ searchParams }: Props) {
//   const resolvedsearchParams = await searchParams;
//   const data = await getArticleList({
//     limit: TOP_ARTICLE_LIST_LIMIT,
//   });

//   return (
//     <Layout>
//       <div className={styles.container}>
//         <Main className={styles.mainContent}>
//           <h1 className={styles.sectionTitle}>スポーツアナリティクス</h1>
//           <div className={styles.cards}>
//             <Cards articles={data.contents} />
//           </div>
//           <div className={styles.buttonLink}>
//             <ButtonLink href="/articles">Read More</ButtonLink>
//           </div>
//         </Main>
//         <Sub className={styles.sidebar}>
//           <Ad />
//           <Ranking draftKey={resolvedsearchParams.rankingDraftKey} />
//           <Ad />
//           <Predict />
//           <SearchField />
//           <Ad />
//         </Sub>
//       </div>
//       <ScrollToTop />
//     </Layout>
//   );
// }

// import styles from "./page.module.css";
// import Layout from "./_components/Layout";
// import Main from "./_components/Main";
// import Sub from "./_components/Sub";
// import Ad from "./_components/Ad";
// import { TOP_ARTICLE_LIST_LIMIT } from "@/app/_constants";
// import { getArticleList } from "@/app/_libs/microcms";
// import Cards from "./_components/Cards";
// import Ranking from "./_components/Ranking";
// import SearchField from "./_components/SearchField";
// import ButtonLink from "./_components/ButtonLink";
// import Predict from "./_components/Predict";
// import ScrollToTop from "./_components/ScrollToTop";
// import Slider from "./_components/Slider";

// export const revalidate = 60;

// type Props = {
//   searchParams: Promise<{
//     rankingDraftKey?: string;
//   }>;
// };

// export default async function Page({ searchParams }: Props) {
//   const resolvedsearchParams = await searchParams;
//   const data = await getArticleList({
//     limit: TOP_ARTICLE_LIST_LIMIT,
//   });

//   return (
//     <Layout>
//       <div className={styles.container}>
//         <div className={styles.heroWrap}>
//           <Slider articles={data.contents} interval={5000} />
//         </div>
//         <Main className={styles.mainContent}>
//           <div className={styles.cards}>
//             <Cards articles={data.contents} />
//           </div>
//           <div className={styles.buttonLink}>
//             <ButtonLink href="/articles">Read More</ButtonLink>
//           </div>
//         </Main>
//         <Sub className={styles.sidebar}>
//           <Ad />
//           <Ranking draftKey={resolvedsearchParams.rankingDraftKey} />
//           <Ad />
//           <Predict />
//           <SearchField />
//           <Ad />
//         </Sub>
//       </div>
//       <ScrollToTop />
//     </Layout>
//   );
// }

// import styles from "./page.module.css";
// import Layout from "./_components/Layout";
// import Main from "./_components/Main";
// import Sub from "./_components/Sub";
// import Ad from "./_components/Ad";
// import RecruitBanner from "./_components/RecruitBanner";
// import { TOP_ARTICLE_LIST_LIMIT } from "@/app/_constants";
// import { getArticleList } from "@/app/_libs/microcms";
// import Cards from "./_components/Cards";
// import Ranking from "./_components/Ranking";
// import SearchField from "./_components/SearchField";
// import ButtonLink from "./_components/ButtonLink";
// // import Predict from "./_components/Predict";
// import ScrollToTop from "./_components/ScrollToTop";

// export const revalidate = 60;

// type Props = {
//   searchParams: Promise<{
//     rankingDraftKey?: string;
//   }>;
// };

// export default async function Page({ searchParams }: Props) {
//   const resolvedSearchParams = await searchParams;
//   const data = await getArticleList({ limit: TOP_ARTICLE_LIST_LIMIT });

//   return (
//     <Layout>
//       <div className={styles.container}>
//         <Main className={styles.mainContent}>
//           <div className={styles.cards}>
//             <Cards articles={data.contents} />
//           </div>
//           <div className={styles.buttonLink}>
//             <ButtonLink href="/articles">Read More</ButtonLink>
//           </div>
//         </Main>

//         <Sub className={styles.sidebar}>
//           <Ad />
//           <Ranking draftKey={resolvedSearchParams.rankingDraftKey} />
//           <RecruitBanner />
//           {/* <Predict /> */}
//           <SearchField />
//           <Ad />
//         </Sub>
//       </div>

//       <ScrollToTop />
//     </Layout>
//   );
// }

import styles from "./page.module.css";
import Layout from "./_components/Layout";
import Main from "./_components/Main";
import Sub from "./_components/Sub";
import Ad from "./_components/Ad";
import RecruitBanner from "./_components/RecruitBanner";
import GlossaryBanner from "./_components/GlossaryBanner";
import { TOP_ARTICLE_LIST_LIMIT } from "@/app/_constants";
import { getArticleList } from "@/app/_libs/microcms";
import Cards from "./_components/Cards";
import Ranking from "./_components/Ranking";
import SearchField from "./_components/SearchField";
import ButtonLink from "./_components/ButtonLink";
// import Predict from "./_components/Predict";
import ScrollToTop from "./_components/ScrollToTop";

export const revalidate = 60;

type Props = {
  searchParams: Promise<{
    rankingDraftKey?: string;
  }>;
};

export default async function Page({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams;
  const data = await getArticleList({ limit: TOP_ARTICLE_LIST_LIMIT });
  return (
    <Layout>
      <div className={styles.container}>
        <Main className={styles.mainContent}>
          <div className={styles.cards}>
            <Cards articles={data.contents} />
          </div>
          <div className={styles.buttonLink}>
            <ButtonLink href="/articles">Read More</ButtonLink>
          </div>
        </Main>
        <Sub className={styles.sidebar}>
          <Ad />
          <Ranking draftKey={resolvedSearchParams.rankingDraftKey} />
          <GlossaryBanner />
          {/* <Predict /> */}
          <SearchField />
          <RecruitBanner />
          <Ad />
        </Sub>
      </div>
      <ScrollToTop />
    </Layout>
  );
}
