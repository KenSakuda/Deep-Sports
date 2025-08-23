import styles from "./page.module.css";
import Image from "next/image";
import ButtonLink from "../_components/ButtonLink";

export default function MangaSubmissionPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles.title}>「スポーツ×データ」 漫画原稿 募集要項</h1>
        <p className={styles.subtitle}>
          「数字でスポーツを読み解く」新感覚のマンガ作品を募集中。
        </p>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.imageBox}>
            <Image
              src="/commic-image.jpg"
              alt="漫画募集イメージ"
              width={600}
              height={400}
              className={styles.image}
            />
          </div>

          <div className={styles.details}>
            <h2 className={styles.heading}>募集テーマ</h2>
            <p>
              データ分析、統計学、スポーツデータサイエンス、数的思考など、
              <strong>スポーツ×数字</strong>の切り口を活かした
              オリジナルマンガ作品を募集します。
              野球、サッカー、バスケ、格闘技、モータースポーツなど競技は不問。
            </p>

            <h2 className={styles.heading}>応募資格</h2>
            <ul>
              <li>・プロ・アマ問わず（商業誌での連載経験のない方も歓迎）</li>
              <li>・16歳以上</li>
              <li>・スポーツやデータ分析、数字に興味がある方</li>
            </ul>
            <p>
              ※データ分析や統計学に詳しくない方も、分析経験豊富なデータサイエンティスト・データアナリストが編集者とともにサポートするのでご安心ください。
            </p>

            <h2 className={styles.heading}>募集内容</h2>
            <ul>
              <li>・読み切り（16〜32P程度）または連載企画</li>
              <li>
                ・ジャンルは自由（戦力分析・選手補強・球団経営などを題材にした漫画
                / プレー分析をもとにした戦術漫画 など）
              </li>
              <li>・原稿種類はデジタル・アナログ問わず</li>
            </ul>

            <h2 className={styles.heading}>原稿形式</h2>
            <ul>
              <li>
                ・【アナログ原稿】B4サイズの漫画原稿用紙を使用して、黒インクか墨汁で描いてください。セリフは濃いめの鉛筆で書き、絵にかかるセリフは、原稿の上にトレーシングペーパーを貼り、その上に鉛筆で書いてください。
              </li>
              <li>
                ・【デジタル原稿】原稿サイズは、アナログ原稿に準じます。解像度はモノクロ2値600dpi以上、データ形式はTIFFか、PDFを推奨します。デジタル原稿の場合、WEB投稿を推奨しますが、郵送したい場合は、データを記録したメディア（CD、USBメモリのみ）と、印刷した出力見本を同封してください。
              </li>
            </ul>

            <h2 className={styles.heading}>選考と掲載</h2>
            <p>
              編集部にて選考のうえ、優秀作は 『Deep
              Sports』内にて連載、もしくは特別掲載されます。
              掲載後の単行本化・メディアミックスなどの支援も行います。
            </p>

            <div className={styles.buttonLink}>
              <ButtonLink href="/contact">応募・問い合わせ</ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
