import { Metadata } from "next";
import Image from "next/image";
import Layout from "@/app/_components/Layout";
import Main from "@/app/_components/Main";
import Sub from "@/app/_components/Sub";
import Ad from "@/app/_components/Ad";
import Ranking from "@/app/_components/Ranking";
import SearchField from "@/app/_components/SearchField";
import ScrollToTop from "@/app/_components/ScrollToTop";
import { getGlossaryDetail } from "@/app/_libs/microcms";
import styles from "./page.module.css";
import { notFound } from "next/navigation";
import DOMPurify from "isomorphic-dompurify";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ draftKey?: string }>;
};

export const revalidate = 60;

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const { draftKey } = await searchParams;
  const data = await getGlossaryDetail(slug, { draftKey }).catch(() => null);
  if (!data) return { title: "用語解説 | Deep Sports" };
  return {
    title: data.title,
    description: data.description ?? `${data.title} の用語解説（Deep Sports）`,
    openGraph: {
      title: data.title,
      description:
        data.description ?? `${data.title} の用語解説（Deep Sports）`,
    },
  };
}

export default async function Page({ params, searchParams }: Props) {
  const { slug } = await params;
  const { draftKey } = await searchParams;

  const data = await getGlossaryDetail(slug, { draftKey }).catch(notFound);

  return (
    <Layout>
      <div className={`${styles.contentWrapper} ${styles.theme}`}>
        <Main className={styles.mainContent}>
          {/* スマホ時にだけ中身をフルブリードにするラッパー（記事ページと同じ思想） */}
          <div className={styles.mobileEdge}>
            {/* Hero */}
            <div className={styles.hero}>
              <p className={styles.kicker}>用語集</p>
              <p className={styles.subtitle}>
                「Deep Sports編集部」 ×
                見習いデータサイエンティスト・松井くんの対話で学ぶ！
              </p>
              <h1 className={styles.title}>{data.title}</h1>
            </div>

            {/* チャット本体 */}
            <section className={styles.section}>
              <ul className={styles.chatList}>
                {(data.chat ?? []).map((m, i) => {
                  const isEditor = m.role === "editor";
                  return (
                    <li
                      key={i}
                      className={`${styles.row} ${
                        isEditor ? styles.left : styles.right
                      }`}
                    >
                      {/* アバター */}
                      <div className={styles.avatarWrap}>
                        {m.icon?.url ? (
                          <Image
                            src={m.icon.url}
                            alt={
                              m.speakerName ??
                              (isEditor ? "Deep Sports編集部" : "松井くん")
                            }
                            width={56}
                            height={56}
                            className={styles.avatarImg}
                          />
                        ) : (
                          <div
                            className={`${styles.avatar} ${
                              isEditor
                                ? styles.avatarEditor
                                : styles.avatarBeginner
                            }`}
                            aria-hidden
                          >
                            {isEditor ? "E" : "B"}
                          </div>
                        )}
                        <span className={styles.speaker}>
                          {m.speakerName ??
                            (isEditor ? "Deep Sports編集部" : "松井くん")}
                        </span>
                      </div>

                      {/* 吹き出し */}
                      <div
                        className={`${styles.bubble} ${
                          isEditor ? styles.editor : styles.beginner
                        }`}
                      >
                        <div
                          className={styles.text}
                          dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(m.text ?? ""),
                          }}
                        />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>
          </div>
        </Main>

        {/* 右サイド（既存サイトと同構成） */}
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
