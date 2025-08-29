"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

type Term = {
  id: string;
  term: string;
  reading?: string;
  alphaKey: string;
  description: string;
  tags: string[];
  slug: string;
};

const TERMS: Term[] = [
  {
    id: "1",
    term: "ポワソン分布",
    reading: "ぽわそんぶんぷ",
    alphaKey: "P",
    description: "稀に起こる出来事の発生回数を表す確率分布",
    tags: ["統計学", "確率分布"],
    slug: "poisson-distribution",
  },
  //   {
  //     id: "elo",
  //     term: "Elo レーティング",
  //     reading: "イーロ・レーティング",
  //     alphaKey: "E",
  //     description:
  //       "対戦結果で双方の強さを更新するレーティング。直近の結果を反映しやすい。",
  //     tags: ["共通", "レーティング", "アナリティクス"],
  //     slug: "elo-rating",
  //   },
  //   {
  //     id: "war",
  //     term: "WAR",
  //     reading: "ダブリューエーアール",
  //     alphaKey: "W",
  //     description:
  //       "野球で選手の総合的な勝利貢献。平均的な選手に比べて何勝分の上積みかを示す。",
  //     tags: ["野球", "総合指標", "アナリティクス"],
  //     slug: "war",
  //   },
  //   {
  //     id: "babip",
  //     term: "BABIP",
  //     reading: "バビップ",
  //     alphaKey: "B",
  //     description:
  //       "インプレー打球に対する打率。運や守備の寄与を考える際に用いられる。",
  //     tags: ["野球", "打撃", "アナリティクス"],
  //     slug: "babip",
  //   },
  //   {
  //     id: "pace",
  //     term: "Pace（ペース）",
  //     reading: "ペース",
  //     alphaKey: "P",
  //     description:
  //       "一定時間あたりの攻守回数の多さ。バスケなどで試合テンポを示す。",
  //     tags: ["バスケットボール", "テンポ", "アナリティクス"],
  //     slug: "pace",
  //   },
  //   {
  //     id: "high-press",
  //     term: "ハイプレス",
  //     reading: "はいぷれす",
  //     alphaKey: "H",
  //     description: "相手陣内で積極的に圧力をかけて高い位置で奪い切る守備戦術。",
  //     tags: ["サッカー", "戦術"],
  //     slug: "high-press",
  //   },
  //   {
  //     id: "box-one",
  //     term: "Box-and-One",
  //     reading: "ボックス・アンド・ワン",
  //     alphaKey: "B",
  //     description:
  //       "ゾーン4人＋マンツーマン1人のハイブリッド守備。エース封じで採用されやすい。",
  //     tags: ["バスケットボール", "戦術"],
  //     slug: "box-and-one",
  //   },
  //   {
  //     id: "garbage-time",
  //     term: "Garbage Time",
  //     reading: "ガーベッジタイム",
  //     alphaKey: "G",
  //     description:
  //       "勝敗がほぼ決した時間帯。主要選手の起用や指標解釈では除外されることがある。",
  //     tags: ["共通", "用語"],
  //     slug: "garbage-time",
  //   },
  //   {
  //     id: "heatmap",
  //     term: "ヒートマップ",
  //     reading: "ひーとまっぷ",
  //     alphaKey: "H",
  //     description: "プレー位置や支配エリアを色の濃淡で可視化した図。",
  //     tags: ["可視化", "アナリティクス", "共通"],
  //     slug: "heatmap",
  //   },
  //   {
  //     id: "ppda",
  //     term: "PPDA",
  //     reading: "ピーピーディーエー",
  //     alphaKey: "P",
  //     description:
  //       "相手のパス1本あたりの守備アクション数。小さいほどプレス強度が高い。",
  //     tags: ["サッカー", "守備", "アナリティクス"],
  //     slug: "ppda",
  //   },
  //   {
  //     id: "ts",
  //     term: "TS%",
  //     reading: "トゥルーシューティング",
  //     alphaKey: "T",
  //     description: "FG・3P・FTを含めた総合的な得点効率指標。",
  //     tags: ["バスケットボール", "効率", "アナリティクス"],
  //     slug: "true-shooting",
  //   },
  //   {
  //     id: "derby",
  //     term: "ダービー",
  //     reading: "だーびー",
  //     alphaKey: "D",
  //     description: "地域や因縁を背景に対立するカード。観客動員や注目度が高い。",
  //     tags: ["共通", "文化", "スケジューリング"],
  //     slug: "derby",
  //   },
];

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function GlossaryPage() {
  const [q, setQ] = useState("");
  const [activeLetter, setActiveLetter] = useState<"ALL" | string>("ALL");
  const [activeTags, setActiveTags] = useState<string[]>([]);

  const allTags = useMemo(() => {
    const s = new Set<string>();
    TERMS.forEach((t) => t.tags.forEach((g) => s.add(g)));
    return Array.from(s).sort((a, b) => a.localeCompare(b, "ja"));
  }, []);

  const letterCounts = useMemo(() => {
    const m = new Map<string, number>();
    LETTERS.forEach((l) => m.set(l, 0));
    TERMS.forEach((t) => {
      const k = (t.alphaKey || "").toUpperCase();
      if (m.has(k)) m.set(k, (m.get(k) || 0) + 1);
    });
    return m;
  }, []);

  const filtered = useMemo(() => {
    const kw = q.trim().toLowerCase();
    return TERMS.filter((t) => {
      const inSearch =
        kw.length === 0 ||
        t.term.toLowerCase().includes(kw) ||
        (t.reading || "").toLowerCase().includes(kw) ||
        t.description.toLowerCase().includes(kw);

      const inLetter =
        activeLetter === "ALL" ||
        (t.alphaKey && t.alphaKey.toUpperCase() === activeLetter);

      const inTags =
        activeTags.length === 0 ||
        activeTags.every((tag) => t.tags.includes(tag));

      return inSearch && inLetter && inTags;
    });
  }, [q, activeLetter, activeTags]);

  const toggleTag = (tag: string) =>
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );

  const clearFilters = () => {
    setQ("");
    setActiveLetter("ALL");
    setActiveTags([]);
  };

  return (
    <div className={styles.page} data-glossary-root>
      {/* HERO */}
      <section className={styles.hero} aria-labelledby="glossaryTitle">
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <h1 id="glossaryTitle" className={styles.title}>
              用語集
            </h1>
            <p className={styles.lead}>
              キーワードをサクッと理解。分析記事がもっと面白くなる。
            </p>

            <div className={styles.searchWrap}>
              <label htmlFor="search" className={styles.srOnly}>
                用語を検索
              </label>
              <input
                id="search"
                type="search"
                placeholder="用語・よみ・説明で検索…（例：xG / レーティング / 守備）"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                className={styles.search}
                aria-label="用語検索"
              />
              {q && (
                <button
                  className={styles.clear}
                  onClick={() => setQ("")}
                  aria-label="検索をクリア"
                >
                  ×
                </button>
              )}
            </div>

            <div
              className={styles.tags}
              role="group"
              aria-label="タグで絞り込み"
            >
              {allTags.map((tag) => (
                <button
                  key={tag}
                  className={`${styles.tag} ${
                    activeTags.includes(tag) ? styles.tagActive : ""
                  }`}
                  onClick={() => toggleTag(tag)}
                  aria-pressed={activeTags.includes(tag)}
                >
                  #{tag}
                </button>
              ))}
              {(q || activeTags.length || activeLetter !== "ALL") && (
                <button className={styles.reset} onClick={clearFilters}>
                  条件クリア
                </button>
              )}
            </div>

            <div
              className={styles.az}
              role="tablist"
              aria-label="アルファベット索引"
            >
              <button
                role="tab"
                aria-selected={activeLetter === "ALL"}
                className={`${styles.azItem} ${
                  activeLetter === "ALL" ? styles.azActive : ""
                }`}
                onClick={() => setActiveLetter("ALL")}
              >
                ALL
              </button>
              {LETTERS.map((l) => {
                const count = letterCounts.get(l) || 0;
                const disabled = count === 0;
                return (
                  <button
                    key={l}
                    role="tab"
                    aria-selected={activeLetter === l}
                    className={`${styles.azItem} ${
                      activeLetter === l ? styles.azActive : ""
                    }`}
                    onClick={() => !disabled && setActiveLetter(l)}
                    disabled={disabled}
                    aria-disabled={disabled}
                    title={disabled ? "該当なし" : `${count}件`}
                  >
                    {l}
                  </button>
                );
              })}
            </div>
          </div>

          <div className={styles.heroVisual} aria-hidden="true">
            <span className={styles.ribbon} />
            <span className={styles.glyph}>Aa</span>
          </div>
        </div>
      </section>

      {/* BODY */}
      <div className={styles.bodyWrap}>
        <aside className={styles.sidebar} aria-label="索引">
          <div className={styles.sideCard}>
            <div className={styles.sideHead}>索引</div>
            <div className={styles.sideAZ}>
              <button
                className={`${styles.sideAZItem} ${
                  activeLetter === "ALL" ? styles.sideAZActive : ""
                }`}
                onClick={() => setActiveLetter("ALL")}
              >
                ALL
              </button>
              {LETTERS.map((l) => {
                const disabled = (letterCounts.get(l) || 0) === 0;
                return (
                  <button
                    key={`side-${l}`}
                    className={`${styles.sideAZItem} ${
                      activeLetter === l ? styles.sideAZActive : ""
                    }`}
                    onClick={() => !disabled && setActiveLetter(l)}
                    disabled={disabled}
                    title={disabled ? "該当なし" : ""}
                  >
                    {l}
                  </button>
                );
              })}
            </div>
            <div className={styles.sideHelp}>
              A–Zはローマ字・英語表記の頭文字に合わせています。
            </div>
          </div>
        </aside>

        <main className={styles.main}>
          <div className={styles.resultMeta}>
            <span className={styles.count}>{filtered.length}</span> 件ヒット
          </div>

          {filtered.length === 0 ? (
            <div className={styles.empty}>
              条件に一致する用語が見つかりませんでした。
            </div>
          ) : (
            <div className={styles.grid}>
              {filtered.map((t) => (
                <article key={t.id} className={styles.card}>
                  <div className={styles.cardHead}>
                    <div className={styles.termWrap}>
                      <h2 className={styles.term}>{t.term}</h2>
                      {t.reading && (
                        <span className={styles.reading}>{t.reading}</span>
                      )}
                    </div>
                    <span className={styles.alpha} aria-hidden="true">
                      {t.alphaKey}
                    </span>
                  </div>
                  <p className={styles.desc}>{t.description}</p>
                  <div className={styles.cardFoot}>
                    <div className={styles.cardTags}>
                      {t.tags.map((g) => (
                        <button
                          key={t.id + g}
                          className={styles.cardTag}
                          onClick={() => toggleTag(g)}
                          aria-label={`タグ ${g} で絞り込む`}
                          title={`#${g} で絞り込む`}
                        >
                          #{g}
                        </button>
                      ))}
                    </div>
                    <Link
                      href={`/glossary/${t.slug}`}
                      className={styles.more}
                      aria-label={`${t.term} の詳細ページへ`}
                    >
                      詳しく見る{" "}
                      <span className={styles.chev} aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
