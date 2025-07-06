"use client";

import styles from "./page.module.css";
import Link from "next/link";

export default function SitePolicyPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>サイトポリシー</h1>

      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="#site-policy">サイトポリシー</a>
          </li>
          <li>
            <a href="#privacy-policy">プライバシーポリシー</a>
          </li>
          <li>
            <a href="#recommended-environment">推奨環境</a>
          </li>
        </ul>
      </nav>

      <section id="site-policy" className={styles.section}>
        <h2 className={styles.heading}>サイトポリシー</h2>
        <p>
          当ウェブサイト『Deep
          Sports』（以下「当ウェブサイト」）は、株式会社MyStory（以下「当社」）が運営しています。当ウェブサイトは、以下の方針に基づいて運営いたします。ご利用の前に、あらかじめご一読ください。
        </p>
        <p>
          当社では、当ウェブサイトのすべての利用者は、下記の方針を理解し、これに同意されたものとみなします。なお、各種お問い合わせについては「
          <Link href="/contact">お問い合わせ</Link>」をご覧ください。
        </p>

        <h3 className={styles.subheading}>著作権</h3>
        <p>
          当ウェブサイトのコンテンツ（商標、ロゴ、文章、写真、動画等）は著作権法などで保護されています。無断転載・商業利用はお断りしています。利用をご希望の場合は事前に当社の許可を得てください。
        </p>

        <h3 className={styles.subheading}>免責事項</h3>
        <p>
          当ウェブサイトの内容は信頼できる情報を元に作成されていますが、正確性や完全性を保証するものではありません。当サイトの利用で生じるいかなる損害についても当社は一切責任を負いません。
        </p>

        <h3 className={styles.subheading}>データ利用について</h3>
        <p>
          当社は、利用者のアクセス日時やIPアドレス、閲覧URL、ブラウザ種類、クッキー情報などを取得し、Webサイトの分析やサービス改善に利用します。
        </p>

        <h3 className={styles.subheading}>クッキー（Cookie）の利用について</h3>
        <p>
          当ウェブサイトでは、サービス向上のためクッキーを使用しています。クッキーはブラウザ設定で無効にできますが、機能が一部制限される場合があります。
        </p>

        <h3 className={styles.subheading}>当ウェブサイトへのリンク</h3>
        <p>
          当ウェブサイトへのリンクは原則自由ですが、誤解を生じさせる形や違法・公序良俗に反するサイトからのリンクはお断りします。
        </p>
      </section>

      <section id="privacy-policy" className={styles.section}>
        <h2 className={styles.heading}>プライバシーポリシー</h2>
        <h3 className={styles.subheading}>個人情報の取り扱い</h3>
        <p>
          当ウェブサイトは、個人情報の取り扱いにおいて「
          <Link href="/privacy">プライバシーポリシー</Link>
          」に基づき運用します。
        </p>

        <h3 className={styles.subheading}>投稿内容の取り扱い</h3>
        <p>
          ご意見・ご感想などをお寄せいただいた場合、特に断りがない限り、当社に無償で提供されたものとみなし、当社運営サイトや当社が運営する他媒体に掲載させていただく場合があります。
        </p>
      </section>

      <section id="recommended-environment" className={styles.section}>
        <h2 className={styles.heading}>推奨環境</h2>

        <h3 className={styles.subheading}>推奨ブラウザ</h3>
        <p>
          <strong>Windows</strong>: Edge最新版、Chrome最新版、Firefox最新版
          <br />
          <strong>macOS</strong>: Safari最新版、Chrome最新版、Firefox最新版
          <br />
          <strong>iOS</strong>: Safari最新版
          <br />
          <strong>Android</strong>: Chrome最新版
        </p>

        <h3 className={styles.subheading}>JavaScript/CSS</h3>
        <p>
          当ウェブサイトはJavaScript・CSSを使用しています。無効にしている場合は正しく表示されない場合があります。
        </p>
      </section>
    </div>
  );
}
