import styles from "./page.module.css";
import Image from "next/image";
// import Link from "next/link";
import { FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";
import ButtonLink from "../_components/ButtonLink";

export default function AdvertisePage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles.title}>『Deep Sports』広告出稿のお問合せ</h1>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.mediaWrapper}>
            <div className={styles.imageBox}>
              <Image
                src="/deepsports.png"
                alt="Deep Sports Cover"
                width={400}
                height={500}
                className={styles.image}
              />
              <div className={styles.snsWrapper}>
                <div className={styles.snsItem}>
                  <FaInstagram className={styles.icon} />
                  <span>アカウント開設準備中</span>
                </div>
                <div className={styles.snsItem}>
                  <FaXTwitter className={styles.icon} />
                  <span>アカウント開設準備中</span>
                </div>
                <div className={styles.snsItem}>
                  <FaYoutube className={styles.icon} />
                  <span>アカウント開設準備中</span>
                </div>
              </div>
            </div>

            <div className={styles.mediaDetails}>
              <p className={styles.description}>
                『Deep Sports』は、株式会社MyStoryがお届けする
                <strong>スポーツアナリティクス特化型</strong>
                ニュースサイトです。
                <br />
                独自の視点から選手やチームのパフォーマンスを可視化し、
                <strong>数字からスポーツを読み解く</strong>
                記事を配信。アスリートや理屈っぽくスポーツを楽しみたい分析好きな読者から熱い支持を集めています。
              </p>

              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <span>月間PV数</span>
                  <span>---</span>
                  <span>万/PV</span>
                </div>
                <div className={styles.statItem}>
                  <span>月間UU数</span>
                  <span>---</span>
                  <span>万/UU</span>
                </div>
              </div>

              <ul className={styles.profile}>
                <li>
                  <strong>読者ターゲット</strong>
                  ：スポーツファン／データ分析志向の方／ビジネスパーソン
                </li>
                <li>
                  <strong>年齢</strong>：20〜40代中心
                </li>
                <li>
                  <strong>エリア</strong>：全国
                </li>
                <li>
                  <strong>性別</strong>：男：女＝8：2
                </li>
              </ul>

              {/* <div className={styles.downloadLinks}>
                <Link href="/media/deep_sports_mediaguide.pdf" target="_blank">
                  メディアガイド
                </Link>
                <Link href="/media/deep_sports_case_study.pdf" target="_blank">
                  タイアップ事例
                </Link>
                <Link href="/media/deep_sports_schedule.pdf" target="_blank">
                  配信スケジュール
                </Link>
                <Link href="/media/deep_sports_userprofile.pdf" target="_blank">
                  ユーザープロフィール
                </Link>
              </div> */}
              <div className={styles.buttonLink}>
                <ButtonLink href="/contact">お問い合わせはこちら</ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
