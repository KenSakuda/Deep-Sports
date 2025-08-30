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
import type { Tagtype } from "@/app/_libs/microcms";
type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ draftKey?: string; page?: string }>;
};
export const revalidate = 60;
// ブロック定義
type RichEditorBlock = { fieldId: "richEditor"; richEditor: string };
type AdBlock = { fieldId: "ad"; ad?: boolean };
type PageBreakBlock = { fieldId: "pageBreak" };
type UnknownBlock = { fieldId: string; [k: string]: unknown };
type ContentBlock = RichEditorBlock | AdBlock | PageBreakBlock | UnknownBlock;
// ページ分割
function splitIntoPages(blocks: ContentBlock[]): ContentBlock[][] {
  const pages: ContentBlock[][] = [[]];
  let i = 0;
  for (const b of blocks ?? []) {
    if (b.fieldId === "pageBreak") {
      if (pages[i].length) i++;
      pages[i] = pages[i] ?? [];
      continue;
    }
    pages[i].push(b);
  }
  return pages.length ? pages : [[]];
}
export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const { draftKey } = await searchParams;
  const data = await getArticleDetail(slug, { draftKey });
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
  const { slug } = await params;
  const { draftKey, page } = await searchParams;
  const data = await getArticleDetail(slug, { draftKey }).catch(notFound);
  const currentPage = parseInt(page ?? "1", 10);
  const pages = splitIntoPages(data.content as ContentBlock[]);
  const currentBlocks = pages[currentPage - 1] ?? [];
  return (
    <Layout>
      <div className={styles.contentWrapper}>
        <Main className={styles.mainContent}>
          {/* ▼ スマホ時のみ“画面端まで”寄せるラッパー */}
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
            {Array.isArray(data.tags) && <Tags tags={data.tags as Tagtype[]} />}
            <Image
              src={data.thumbnail.url}
              alt=""
              width={data.thumbnail.width}
              height={data.thumbnail.height}
              className={styles.mainImage}
            />
            <div className={styles.article}>
              {currentBlocks.map((b, i) => {
                if (b.fieldId === "richEditor")
                  return (
                    <RichEditor
                      key={i}
                      content={(b as RichEditorBlock).richEditor}
                    />
                  );
                if (b.fieldId === "ad" && (b as AdBlock).ad)
                  return <Ad key={i} />;
                return null;
              })}
            </div>
            {pages.length > 1 && (
              <ArticlePagenation
                totalPages={pages.length}
                currentPage={currentPage}
                basePath={`/articles/${slug}`}
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
