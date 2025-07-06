import { Metadata } from "next";
import Image from "next/image";
import { getArticleDetail } from "@/app/_libs/microcms";
import Layout from "@/app/_components/Layout";
import Main from "@/app/_components/Main";
import Sub from "@/app/_components/Sub";
import Ad from "@/app/_components/Ad";
import Ranking from "@/app/_components/Ranking";
import Date from "@/app/_components/Date";
import RichEditor from "@/app/_components/RichEditor";
// import Pickup from "@/app/_components/Pickup";
import SearchField from "@/app/_components/SearchField";
import Predict from "@/app/_components/Predict";
// import Stats from "@/app/_components/Stats";
import Category from "@/app/_components/Category";
import Cards from "@/app/_components/Cards";
import ScrollToTop from "@/app/_components/ScrollToTop";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    draftKey?: string;
  }>;
};

export const revalidate = 60;

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  const data = await getArticleDetail(resolvedParams.slug, {
    draftKey: resolvedSearchParams.draftKey,
  });

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: data.thumbnail.url,
    },
  };
}

export default async function Page({ params, searchParams }: Props) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  const data = await getArticleDetail(resolvedParams.slug, {
    draftKey: resolvedSearchParams.draftKey,
  }).catch(notFound);
  return (
    <Layout>
      <div className={styles.contentWrapper}>
        <Main className={styles.mainContent}>
          <h1 className={styles.title}>{data.title}</h1>
          <div className={styles.meta}>
            {data.category && <Category category={data.category} />}
            <Date date={data.date} />
            {data.tags}
          </div>
          <Image
            src={data.thumbnail.url}
            alt=""
            width={data.thumbnail.width}
            height={data.thumbnail.height}
            className={styles.mainImage}
          />
          {data.content.map((item, i) => {
            if (item.fieldId === "richEditor") {
              return <RichEditor key={i} content={item.richEditor} />;
            }
            if (item.fieldId === "ad" && item.ad) {
              return <Ad key={i} />;
            }
            return null;
          })}
          {(data.relatedArticles ?? []).length > 0 && (
            <>
              <h2 className={styles.relatedTitle}>関連記事</h2>
              <Cards articles={data.relatedArticles ?? []} />
            </>
          )}
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
