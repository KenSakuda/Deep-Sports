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

        {/* ▼ ここを mobileEdge で包む */}
        <Sub className={styles.sidebar}>
          <div className={styles.mobileEdge}>
            <Ad />
            <Ranking draftKey={resolvedSearchParams.rankingDraftKey} />
            <GlossaryBanner />
            <SearchField />
            <RecruitBanner />
            <Ad />
          </div>
        </Sub>
      </div>
      <ScrollToTop />
    </Layout>
  );
}
