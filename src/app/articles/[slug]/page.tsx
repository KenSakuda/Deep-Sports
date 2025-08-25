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
import SearchField from "@/app/_components/SearchField";
import Category from "@/app/_components/Category";
import Tags from "@/app/_components/Tags";
import Cards from "@/app/_components/Cards";
import ScrollToTop from "@/app/_components/ScrollToTop";
import styles from "./page.module.css";
import { notFound } from "next/navigation";
import ArticlePagenation from "@/app/_components/ArticlePagenation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    draftKey?: string;
    page?: string;
  }>;
};

export const revalidate = 60;
// ===== ブロック型定義 =====
type RichEditorBlock = {
  fieldId: "richEditor";
  richEditor: string;
};
type AdBlock = {
  fieldId: "ad";
  ad?: boolean;
};
type PageBreakBlock = {
  fieldId: "pageBreak";
};
type UnknownBlock = {
  fieldId: string;
  [key: string]: unknown;
};
type ContentBlock = RichEditorBlock | AdBlock | PageBreakBlock | UnknownBlock;
// ===== ページ分割関数 =====
function splitIntoPages(blocks: ContentBlock[]): ContentBlock[][] {
  const pages: ContentBlock[][] = [[]];
  let idx = 0;
  for (const b of blocks ?? []) {
    if (b.fieldId === "pageBreak") {
      if (pages[idx].length === 0) continue;
      idx++;
      pages[idx] = [];
      continue;
    }
    pages[idx].push(b);
  }
  return pages.length ? pages : [[]];
}
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
  const currentPage = parseInt(resolvedSearchParams.page ?? "1", 10);
  const pages = splitIntoPages(data.content as ContentBlock[]);
  const currentBlocks = pages[currentPage - 1] ?? [];
  return (
    <Layout>
      <div className={styles.contentWrapper}>
        <Main className={styles.mainContent}>
          {/* ← スマホ時にだけ中身をフルブリードにするラッパー */}
          <div className={styles.mobileEdge}>
            <h1 className={styles.title}>{data.title}</h1>
            <div className={styles.metaRow}>
              <div className={styles.metaLeft}>
                {data.category && <Category category={data.category} />}
              </div>
              <div className={styles.metaRight}>
                <Date date={data.date} />
              </div>
            </div>
            <div>
              タグ：
              {Array.isArray(data.tags) && <Tags tags={data.tags} />}
            </div>
            <Image
              src={data.thumbnail.url}
              alt=""
              width={data.thumbnail.width}
              height={data.thumbnail.height}
              className={styles.mainImage}
            />
            {/* 本文ブロック */}
            <div className={styles.article}>
              {currentBlocks.map((item: ContentBlock, i: number) => {
                if (item.fieldId === "richEditor") {
                  const rb = item as RichEditorBlock;
                  return <RichEditor key={i} content={rb.richEditor} />;
                }
                if (item.fieldId === "ad") {
                  const ab = item as AdBlock;
                  if (ab.ad) return <Ad key={i} />;
                  return null;
                }
                return null;
              })}
            </div>
            {/* ページネーション（ブロック分割時のみ） */}
            {pages.length > 1 && (
              <ArticlePagenation
                totalPages={pages.length}
                currentPage={currentPage}
                basePath={`/articles/${resolvedParams.slug}`}
              />
            )}
            {(data.relatedArticles ?? []).length > 0 && (
              <>
                <h2 className={styles.relatedTitle}>関連記事</h2>
                <Cards articles={data.relatedArticles ?? []} />
              </>
            )}
          </div>
        </Main>
        <Sub className={styles.sidebar}>
          <Ad />
          <Ranking />
          <SearchField />
          <Ad />
        </Sub>
      </div>
      <ScrollToTop />
    </Layout>
  );
}
