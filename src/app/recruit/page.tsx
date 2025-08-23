import styles from "./page.module.css";
import Link from "next/link";

type Job = {
  id: string;
  title: string;
  type: "正社員" | "業務委託" | "インターン";
  location: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  welcome?: string[];
};

const JOBS: Job[] = [
  {
    id: "editor",
    title: "スポーツ編集者 / ライター",
    type: "正社員",
    location: "フルリモート（国内）",
    description:
      "各競技の試合や選手・チームの取材／速報記事の編集・校閲、企画立案まで幅広くお任せします。",
    responsibilities: [
      "試合・イベントの取材、選手・指導者へのインタビュー",
      "記事執筆、校閲、見出し／サムネ設計",
      "特集・連載などの企画立案と進行",
    ],
    requirements: [
      "Webまたは紙媒体での編集・ライティング経験",
      "基本的なSEO / CMS運用の理解",
      "競技全般への関心（専門競技があれば歓迎）",
    ],
    welcome: ["英語等の語学力", "スポーツアナリティクスに関心がある方"],
  },
  {
    id: "data",
    title: "データアナリスト（スポーツ）",
    type: "正社員",
    location: "フルリモート（国内）",
    description:
      "試合データやトラッキングデータの取得・分析、可視化、記事企画への橋渡しを行います。",
    responsibilities: [
      "各種データの前処理・分析（Python / SQL など）",
      "可視化ダッシュボードの設計",
      "記者・編集との連携による記事化／解説",
    ],
    requirements: [
      "Python / R / SQL いずれかでの分析経験",
      "可視化ツール（Tableau等）またはWeb D3.js などの経験",
    ],
    welcome: ["スポーツ分野での分析経験", "機械学習の基礎知識"],
  },
  {
    id: "engineer",
    title: "フロントエンドエンジニア",
    type: "業務委託",
    location: "フルリモート（国内）",
    description:
      "Deep Sports のプロダクト開発（Next.js）や、CVR改善のためのUI改善を担当します。",
    responsibilities: [
      "Next.js / TypeScript を用いた開発・運用",
      "パフォーマンス・アクセシビリティ改善",
      "配信面/広告計測・AB実験の導入",
    ],
    requirements: [
      "React/Next.js の実務経験",
      "CSS Modules などでのスタイリング経験",
    ],
    welcome: ["SSR/ISR、Edge実行の知見", "UIデザインへの関心"],
  },
];
export const metadata = {
  title: "採用情報",
  description:
    "Deep Sports の採用情報。スポーツ×データの力で、もっと良い観戦体験を。",
};

export default function RecruitPage() {
  return (
    <div className={styles.page}>
      {/* hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.kicker}>RECRUIT</p>
          <h1 className={styles.heroTitle}>
            スポーツを、もっと深く。
            <br className={styles.br} />
            データで、世界を面白く。
          </h1>
          <p className={styles.heroLead}>
            Deep Sports
            は「スポーツ×データ」で新しい読み応えをつくるメディアです。
            編集・ライティング、データ分析、開発など、多様なロールの仲間を募集しています。
          </p>
        </div>
      </section>
      {/* lead / about */}
      <section className={styles.lead}>
        <div className={styles.container}>
          <h2 className={styles.h2}>私たちについて</h2>
          <div className={styles.hr} />
          <p className={styles.leadText}>
            データの力で競技の見方をアップデートし、ファン・選手・指導者に価値ある示唆を届けます。
            事実に基づく分析と、分かりやすい表現の両立を大切にしています。
          </p>
        </div>
      </section>
      {/* jobs */}
      <section className={styles.jobs}>
        <div className={styles.container}>
          <h2 className={styles.h2}>募集職種</h2>
          <div className={styles.hr} />
          <ul className={styles.jobList}>
            {JOBS.map((job) => (
              <li key={job.id} className={styles.jobCard}>
                <div className={styles.jobHeader}>
                  <span className={styles.badge}>{job.type}</span>
                  <span className={styles.location}>{job.location}</span>
                </div>
                <h3 className={styles.jobTitle}>{job.title}</h3>
                <p className={styles.jobDesc}>{job.description}</p>
                <div className={styles.jobCols}>
                  <div className={styles.jobCol}>
                    <p className={styles.jobColTitle}>主な業務</p>
                    <ul className={styles.list}>
                      {job.responsibilities.map((v, i) => (
                        <li key={i}>{v}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.jobCol}>
                    <p className={styles.jobColTitle}>必須スキル</p>
                    <ul className={styles.list}>
                      {job.requirements.map((v, i) => (
                        <li key={i}>{v}</li>
                      ))}
                    </ul>
                  </div>
                  {job.welcome && (
                    <div className={styles.jobCol}>
                      <p className={styles.jobColTitle}>歓迎</p>
                      <ul className={styles.list}>
                        {job.welcome.map((v, i) => (
                          <li key={i}>{v}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <div className={styles.jobCtaRow}>
                  <Link className={styles.button} href={`/contact`}>
                    この職種に応募する
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* culture / benefits */}
      <section className={styles.features}>
        <div className={styles.container}>
          <h2 className={styles.h2}>働く環境・制度</h2>
          <div className={styles.hr} />
          <ul className={styles.featureGrid}>
            <li className={styles.feature}>
              <p className={styles.featureTitle}>フルリモート / フレックス</p>
              <p className={styles.featureText}>
                場所に縛られない働き方。子育てや副業とも両立しやすい環境です。
              </p>
            </li>
            <li className={styles.feature}>
              <p className={styles.featureTitle}>アウトプット重視</p>
              <p className={styles.featureText}>
                ロールに関係なく、企画・改善提案は歓迎。だれもがプロダクトを良くできます。
              </p>
            </li>
            <li className={styles.feature}>
              <p className={styles.featureTitle}>書籍・カンファ支援</p>
              <p className={styles.featureText}>
                取材・分析・開発に関する学習費用の補助制度があります。
              </p>
            </li>
            <li className={styles.feature}>
              <p className={styles.featureTitle}>最新ツールの活用</p>
              <p className={styles.featureText}>
                生成AIを含むツール導入を推進。効率良く本質的な仕事に集中できます。
              </p>
            </li>
          </ul>
        </div>
      </section>
      {/* flow */}
      <section className={styles.flow}>
        <div className={styles.container}>
          <h2 className={styles.h2}>選考フロー</h2>
          <div className={styles.hr} />
          <ol className={styles.flowList}>
            <li>
              <span className={styles.step}>STEP 1</span>
              エントリー（お問い合わせフォーム）
            </li>
            <li>
              <span className={styles.step}>STEP 2</span>
              カジュアル面談（オンライン）
            </li>
            <li>
              <span className={styles.step}>STEP 3</span>
              課題 or トライアル（職種により変動）
            </li>
            <li>
              <span className={styles.step}>STEP 4</span>
              最終面談 → オファー
            </li>
          </ol>
          <p className={styles.flowNote}>
            ※ フローは職種・ご希望の契約形態により一部変更となる場合があります。
          </p>
        </div>
      </section>
      {/* FAQ（details/summaryで軽量実装） */}
      <section className={styles.faq}>
        <div className={styles.container}>
          <h2 className={styles.h2}>よくある質問</h2>
          <div className={styles.hr} />
          <div className={styles.faqList}>
            <details>
              <summary>副業や業務委託での参加は可能ですか？</summary>
              <p>可能です。稼働時間や責務はご希望に応じて相談します。</p>
            </details>
            <details>
              <summary>フルリモートでも応募できますか？</summary>
              <p>
                国内在住であればフルリモートOKです。取材に伴う現地対応は都度ご相談。
              </p>
            </details>
            <details>
              <summary>未経験でも応募できますか？</summary>
              <p>
                ポテンシャル採用枠もあります。成果物やポートフォリオをぜひお送りください。
              </p>
            </details>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.containerNarrow}>
          <h2 className={styles.ctaTitle}>エントリーはこちらから</h2>
          <p className={styles.ctaText}>
            少しでも興味を持っていただけたら、まずはカジュアルに話しましょう。
          </p>
          <Link href="/contact" className={styles.ctaButton}>
            お問い合わせフォームへ
          </Link>
        </div>
      </section>
    </div>
  );
}
